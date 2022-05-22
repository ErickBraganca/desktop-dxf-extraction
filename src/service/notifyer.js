import { Notification } from "@electron/remote";

function showNotification(TITLE, MENSSAGE, SOUND) {
  new Notification({
    title: TITLE,
    body: MENSSAGE,
    urgency: "normal",
    silent: SOUND,
  }).show();
}

const notifyer = {
  error: (menssage) => {
    showNotification("❌ Atenção", menssage, false);
  },
  alert: (menssage) => {
    showNotification("🔔 Alerta", menssage, false);
  },
  sucess: (menssage) => {
    showNotification("✅ Sucesso", menssage, true);
  },
};

export { notifyer };
