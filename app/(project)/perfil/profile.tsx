import { auth } from '@/lib/auth';

export async function ProfileDetails() {
  const session = await auth();

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg md:col-span-2">
      <div className="flex items-center space-x-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white">
          JD
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {session?.user?.name}
          </h2>
          <p className="text-gray-600">{session?.user?.email}</p>
          <p className="text-sm text-gray-500">Membro desde Jan 2024</p>
        </div>
      </div>
    </div>
  );
}
