let chambres = [
    { num: 1, type: 'simple', prix: 80 },
    { num: 2, type: 'double', prix: 120 },
    { num: 3, type: 'suite', prix: 200 },
    
];

let reservations = [];

function afficher_chambres_disponibles() {
    console.log("Chambres disponibles : ");
    for (let chambre of chambres) {
        let res = reservations.find(r => r.numChambre == chambre.num);
        if (!res) {
            console.log(`Numéro : ${chambre.num}, Type : ${chambre.type}, Prix : ${chambre.prix}`);
        }
    }
}

function effectuer_reservation(client, numChambre, dateDebut, dateFin) {
    let chambre = chambres.find(c => c.num == numChambre);
    if (!chambre) {
        console.log("Chambre introuvable.");
        return;
    }

    let res = reservations.find(r => r.numChambre == numChambre);
    if (res) {
        console.log("Cette chambre est déjà réservée pour ces dates.");
        return;
    }

    reservations.push({
        client: client,
        numChambre: numChambre,
        dateDebut: dateDebut,
        dateFin: dateFin
    });

    console.log("Réservation effectuée avec succès.");
}

function afficher_reservations() {
    console.log("Réservations en cours : ");
    for (let reservation of reservations) {
        console.log(`Client : ${reservation.client}, Numéro de chambre : ${reservation.numChambre}, Date de début : ${reservation.dateDebut}, Date de fin : ${reservation.dateFin}`);
    }
}

function main() {
    afficher_chambres_disponibles();

    let moreClients = 'y';
    while (moreClients.toLowerCase() === 'y') {
        let client = prompt("Entrez le nom du client: ");
        let numChambre = parseInt(prompt("Entrez le numéro de chambre: "));
        let dateDebut = prompt("Entrez la date de début: ");
        let dateFin = prompt("Entrez la date de fin: ");

        effectuer_reservation(client, numChambre, dateDebut, dateFin);

        moreClients = prompt("Voulez-vous ajouter un autre client? (y/n)");
    }

    afficher_reservations();
}

main();