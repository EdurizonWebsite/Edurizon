export default function Home() {
  console.log('Rendering Home component');
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Welcome to Edurizon</h2>
        </div>
      </div>
    </div>
  );
}