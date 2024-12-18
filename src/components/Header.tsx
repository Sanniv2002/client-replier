import { MessageSquare } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <MessageSquare className="text-blue-600" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Wellfound Messenger</h1>
            <p className="text-sm text-gray-500">Send messages to your connections</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;