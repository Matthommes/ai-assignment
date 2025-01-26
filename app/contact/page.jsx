import Navbar from "../component/navbar";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Contact Me</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="text-purple-700" />
              <p className="text-gray-600">+234-902-2448-995</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="text-purple-700" />
              <p className="text-gray-600">temitayoemmanual80@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
