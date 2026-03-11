import { motion } from "motion/react";
import {
  MessageCircle,
  Globe,
  Instagram,
  Code,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function Channels() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Deployment Channels
          </h1>
          <p className="text-gray-500 mt-1">
            Connect your AI booking bot to multiple platforms.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChannelCard
          title="Website Widget"
          description="Embed a floating chat widget on your website."
          icon={Globe}
          color="bg-blue-500"
          status="Connected"
          action="Configure"
        />
        <ChannelCard
          title="WhatsApp Business"
          description="Allow customers to book directly via WhatsApp."
          icon={MessageCircle}
          color="bg-emerald-500"
          status="Disconnected"
          action="Connect"
        />
        <ChannelCard
          title="Instagram DM"
          description="Automate booking responses in Instagram Direct."
          icon={Instagram}
          color="bg-pink-500"
          status="Disconnected"
          action="Connect"
        />
        <ChannelCard
          title="Direct Link"
          description="Share a standalone booking page link."
          icon={Code}
          color="bg-purple-500"
          status="Active"
          action="Copy Link"
        />
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mt-8">
        <h2 className="text-xl font-semibold mb-2">Embed Code</h2>
        <p className="text-sm text-gray-500 mb-6">
          Paste this snippet before the closing &lt;/body&gt; tag on your
          website to add the chat widget.
        </p>

        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl text-sm font-mono overflow-x-auto">
            <code>
              {`<script>
  window.AuraBooking = {
    clientId: 'aur_123456789',
    theme: 'light',
    primaryColor: '#000000'
  };
</script>
<script src="https://cdn.aurabooking.com/widget.js" async></script>`}
            </code>
          </pre>
          <CopyButton />
        </div>
      </div>
    </div>
  );
}

function ChannelCard({
  title,
  description,
  icon: Icon,
  color,
  status,
  action,
}: any) {
  const isConnected = status === "Connected" || status === "Active";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-2xl ${color} text-white flex items-center justify-center shadow-sm`}
        >
          <Icon size={24} />
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
            isConnected
              ? "bg-emerald-50 text-emerald-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-emerald-500" : "bg-gray-400"}`}
          />
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-6 flex-1">{description}</p>
      <button
        className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
          isConnected
            ? "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
            : "bg-black text-white hover:bg-gray-800 shadow-sm"
        }`}
      >
        {action}
      </button>
    </motion.div>
  );
}

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
    >
      {copied ? (
        <CheckCircle2 size={16} className="text-emerald-400" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
}
