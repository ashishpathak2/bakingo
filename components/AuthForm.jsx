"use client"
import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import { Phone, AtSign } from "lucide-react";
import { FaWhatsapp, FaRegUser } from "react-icons/fa";
// import GmailIcon from "@/components/icons/GmailIcon";
// import WhatsappIcon from "@/components/icons/WhatsappIcon";
// import GoogleIcon from "@/components/icons/GoogleIcon";
// import Loader from "@/components/icons/Loader";
import { GmailIcon, Loader, WhatsappIcon } from '@/components/Icons';
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
import OtpInput from "@/components/OtpInput";
import GoogleAuthSignin from "@/components/GoogleAuthSignin";


export const AuthForm = () => {
  const [state, setState] = useState({
    authType: "phone",
    error: "",
    userInput: "",
    isLoading: false,
    isOtpSent: false,
    otp: ["", "", "", ""],
    isDialogOpen: false
  });

  // Helper to update state properties
  const updateState = (updates) =>
    setState((prev) => ({ ...prev, ...updates }));

  const authOptions = useMemo(
    () => ({
      phone: { icon: Phone, placeholder: "Enter Mobile No", type: "tel" },
      whatsapp: { icon: FaWhatsapp, placeholder: "Enter Whatsapp No", type: "tel" },
      gmail: { icon: AtSign, placeholder: "Enter Gmail Address", type: "email" },
    }),
    []
  );

  // Toggle authentication method (using a functional update so we avoid stale closures)
  const toggleAuthType = useCallback((type) => {
    setState((prev) => ({
      ...prev,
      authType: prev.authType === type ? "phone" : type,
      userInput: "",
      error: "",
    }));
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // If OTP has not been sent yet, validate the user input and send OTP
  //   if (!state.isOtpSent) {
  //     updateState({ isLoading: true, isOtpSent: true, error: "" });
  //     // Simulate async OTP send (e.g. API call)
  //     setTimeout(() => updateState({ isLoading: false }), 3000);
  //     console.log("User input:", state.userInput);
  //   } else {
  //     updateState({ isLoading: true, error: "" });
  //     // Simulate async OTP verification
  //     setTimeout(() => {
  //       updateState({ isLoading: false });
  //       console.log("OTP entered:", state.otp.join(""));
  //       updateState({ isDialogOpen: false, });
  //       // Here you can add further actions upon successful OTP verification
  //     }, 3000);
  //   }
  // };

  const verifyOtp = async () => {
    updateState({ isLoading: true, error: "" });
  
    const response = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: state.userInput, otp: state.otp.join("") }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      updateState({ isLoading: false, isDialogOpen: false });
      console.log("Login Success:", data);
    } else {
      updateState({ isLoading: false, error: data.error || "Invalid OTP" });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!state.isOtpSent) {
      updateState({ isLoading: true, error: "" });
  
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: state.userInput }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        updateState({ isOtpSent: true, isLoading: false });
      } else {
        updateState({ isLoading: false, error: data.error || "Failed to send OTP" });
      }
    } else {
      // Handle OTP verification
      verifyOtp();
    }
  };
  
  

  return (
    <Dialog open={state.isDialogOpen} onOpenChange={(isOpen) => updateState({ isDialogOpen: isOpen })}>
      <DialogTrigger className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold p-2 sm:px-3 sm:py-2 rounded-full transition-all duration-300 shadow-md">
        <FaRegUser className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm">Login / Signup</span>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden w-[95vw] max-w-[96%] sm:max-w-xl mx-auto rounded-lg shadow-xl">
        <VisuallyHidden>
          <DialogTitle>Authentication</DialogTitle>
        </VisuallyHidden>
        <DialogHeader>
          <DialogDescription>
            <div className="relative flex items-center justify-center w-full p-4 xs:p-5 sm:p-6 bg-cyan-50 min-h-[400px]">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/loginpage.jpg"
                  alt="Login"
                  layout="fill"
                  objectFit="cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <div className="relative z-10 w-full max-w-[400px] p-4 xs:p-5 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-black text-center">
                  {state.isOtpSent ? "OTP Verification" : "Welcome"}
                </h2>
                <p className="text-center text-xs xs:text-sm text-gray-700 mt-2 xs:mt-3">
                  {state.isOtpSent
                    ? `We've sent a verification code to +91 ${state.userInput}`
                    : "Sign in to continue enjoying our services"}
                </p>

                <div className="relative">
                  <form className="mt-4 xs:mt-5" onSubmit={handleSubmit}>
                    {/* Render the phone/email input if OTP is not sent */}
                    {!state.isOtpSent && (
                      <>
                        <AuthInput
                          key={state.authType}
                          icon={authOptions[state.authType].icon}
                          placeholder={authOptions[state.authType].placeholder}
                          type={authOptions[state.authType].type}
                          setFormData={(value) => updateState({ userInput: value })}
                          formData={state.userInput}
                          setError={(value) => updateState({ error: value })}
                        />

                        {state.error && (
                          <p className="pt-1 text-[0.7rem] xs:text-xs font-semibold text-red-600">
                            {state.error}
                          </p>
                        )}

                        {/* Render the "Send OTP" button only when OTP is not sent */}
                        <button
                          disabled={
                            authOptions[state.authType].type !== "email" &&
                            state.userInput.length !== 10
                          }
                          type="submit"
                          className={`w-full p-2 xs:p-3 mt-4 sm:mt-5 font-semibold text-white rounded-lg shadow-md transition-all duration-300 
                        ${authOptions[state.authType].type !== "email" &&
                              state.userInput.length !== 10
                              ? "bg-gray-500 cursor-not-allowed opacity-60"
                              : "bg-red-700 hover:bg-red-800"
                            }`}
                        >
                          Send OTP
                        </button>

                        <p className="mt-4 xs:mt-5 text-center text-xs xs:text-sm text-gray-700">
                          Or login with
                        </p>
                      </>
                    )}

                    {/* Render the OTP input (controlled via props) when OTP is sent */}
                    {state.isOtpSent && (
                      <OtpInput
                        otp={state.otp}
                        setOtp={(newOtp) => updateState({ otp: newOtp })}
                        isLoading={state.isLoading}
                      />
                    )}

                  </form>

                  {state.isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-20">
                      <Loader className="text-red-700" isLoading={state.isLoading} />
                    </div>
                  )}
                </div>

                {!state.isOtpSent && (
                  <div className="flex flex-col xs:flex-row justify-center gap-2 xs:gap-3 mt-4">
                    <GoogleAuthSignin /> {/* Button For Google Signin */}

                    <AuthButton
                      onClick={() => toggleAuthType("gmail")}
                      isActive={state.authType === "gmail"}
                      defaultIcon={GmailIcon}
                      activeIcon={Phone}
                      defaultLabel="Gmail"
                      activeLabel="Phone"
                    />  {/* Button For Gmail Signin */}

                    <AuthButton
                      onClick={() => toggleAuthType("whatsapp")}
                      isActive={state.authType === "whatsapp"}
                      defaultIcon={WhatsappIcon}
                      activeIcon={Phone}
                      defaultLabel="WhatsApp"
                      activeLabel="Phone"
                    />  {/* Button For whatsapp Signin */}
                  </div>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
