// URL del Google Apps Script (reemplaza con tu URL)
const appsScriptUrl = "https://script.google.com/macros/s/AKfycbxn9OmNXNd4bt5CZ-Hfk3f1A44vQ57nPRAzefwjL52ilHmgiS8M0RnX8L20cVC0Vw/exec";

// Escribir datos
document.getElementById("writeData").addEventListener("click", async () => {
  const body = {
    values: ["Nuevo Código", "Nueva Descripción"], // Datos a escribir
  };

  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert(result.message);
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error al escribir datos:", error);
  }
});
