import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {
    isConnected: false
  };

  try {
    if (connection.isConnected) return;

    if (!process.env.MONGO) {
      throw new Error("La chaîne de connexion MongoDB n'est pas définie dans les variables d'environnement.");
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
  
    console.error("Erreur de connexion à MongoDB :", error);
    throw new Error("Échec de la connexion à MongoDB.");
  }
};
