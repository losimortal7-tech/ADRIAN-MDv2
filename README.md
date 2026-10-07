# ADRIAN MD

WhatsApp bot basé sur Baileys.

## Railway

1. Importer ce dépôt GitHub dans Railway.
2. Ajouter la variable `PAIRING_NUMBER` avec le numéro WhatsApp au format international, chiffres uniquement (ex. `509XXXXXXXX`).
3. Déployer avec la commande `npm start`.
4. Ouvrir les logs Railway et récupérer le code de pairing affiché.
5. Dans WhatsApp : Appareils connectés → Connecter un appareil → Connecter avec numéro de téléphone, puis saisir le code.

### Important
Le dossier `session/` doit être conservé entre les redémarrages. Sur Railway, ajoute un Volume monté sur `/app/session` pour éviter de perdre la connexion après un redéploiement/restart.
