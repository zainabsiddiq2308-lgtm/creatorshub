// Is file mein "use client" NAHI hona chahiye
import Homepage from "./components/homepage";

export const metadata = {
  title: 'The Creators Hub | Innovative IT Solutions, Software & Web Development',
  description: 'Ready to elevate your business? The Creators Hub delivers custom software, mobile apps, web development, and digital transformation services to help your business grow faster.',
};

export default function Home() {
  return (
    <main>
      hello
      <Homepage />
    </main>
  );
}