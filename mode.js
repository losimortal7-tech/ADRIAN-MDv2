export default async function modeCommand(message, minato, { args, isOwner, config, updateConfig }) {
  const remoteJid = message.key.remoteJid;

  if (!isOwner) {
    return minato.sendMessage(remoteJid, { text: "❌ Only the owner can change the mode !" });
  }

  
  if (!args[0]) {
    return minato.sendMessage(remoteJid, { text: `ℹ️ The current mode is: *${config.mode.toUpperCase()}*` });
  }

  const newMode = args[0].toLowerCase();
  if (newMode !== "public" && newMode !== "private") {
    return minato.sendMessage(remoteJid, { text: "❌ Invalid mode! Use public or private." });
  }

  
  updateConfig({ mode: newMode });
  minato.sendMessage(remoteJid, { text: `✅ The bot's current mode is: *${newMode.toUpperCase()}*` });
}