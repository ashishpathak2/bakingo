import Header from "../server-components/Header";
import Footer from "../server-components/Footer";
import "../globals.css";
import { userSession } from "@/actions/userSession";
import { fonts } from "@/components/Fonts";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await userSession(); // Fetch user session

  return (
    <html lang="en" className={fonts.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bakingo - Delicious Cakes & Desserts Delivered Fresh!" />
        <title>Bakingo</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header user={user} />
        <main className="flex-grow">{children}</main> 
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
