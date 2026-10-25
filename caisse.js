const budget_client = 20000;
const prix_cahier = 1500;
const qte_cahier = 4;
const prix_stylo = 500;
const qte_stylo = 3;
const montant_cahier = prix_cahier * qte_cahier;
const montant_stylo = prix_stylo * qte_stylo;
const montant_total = montant_cahier + montant_stylo;
let n = 1;
console.log("===== CAISSE =====")
console.log("Cahiers :", montant_cahier,"FCFA")
console.log("Stylo :", montant_stylo,"FCFA")
console.log("Total :", montant_total,"FCFA")
console.log("Budget :", budget_client,"FCFA")
if (montant_total <= budget_client) {
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant")
} console.log("")
while (n < 6) {
    console.log("Achat numéro", n);
    n++;}
