import Navbar from "../component/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">About Me</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <img
            src="/emmy.jpg"
            alt="My Profile Picture"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Temitayo Emmanuel</h2>
          <p className="text-gray-600 mt-2">
            Matric Number: F/HD/23/3210132
          </p>
          <p className="text-gray-500 mt-4">
            I am a student passionate about learning and sharing knowledge in AI
            and programming.
          </p>
        </div>
      </main>
    </div>
  );
}
