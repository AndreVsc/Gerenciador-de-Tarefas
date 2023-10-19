import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { database } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

(function(){

    const firebaseConfig = {
        apiKey: "AIzaSyAgkWlwxR3YfRYtirGB1ErzqM5PuF7MvH0",
        authDomain: "estoque-8ca5b.firebaseapp.com",
        projectId: "estoque-8ca5b",
        storageBucket: "estoque-8ca5b.appspot.com",
        messagingSenderId: "55059134321",
        appId: "1:55059134321:web:d7c38d1adc0c1aed7a68d0"
    };

    const app=initializeApp(firebaseConfig);

    // Obtenha uma referência para o banco de dados
    const db = database(app);
    const ref = db.ref("test"); // "test" é o nó que você deseja observar

    // Adicione um ouvinte para eventos "value"
    ref.on("value", (snapshot) => {
        const data = snapshot.val();
        console.log("Dados no nó 'test':", data);
    })
})()