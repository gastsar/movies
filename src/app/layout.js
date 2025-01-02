import { montserrat, roboto } from "@/font";
import Header from "./components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import "./globals.scss";

export const metadata = {
  title: "MyMovie",
  description: "Catalogue de films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head></head>
      <body className={`${roboto.className}, ${montserrat.className}`}>
        <Header />
        <MovieSearch />
        {children}
      </body>
    </html>
  );
}
