const host = window.location.protocol + "//" + window.location.host;
const button = document.getElementById('Charger ma flotte');
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("game-id");
    const playerName = urlParams.get("player-name");
    document.getElementById("game-id").value = gameId;
    document.getElementById("player-name").value = playerName;
    const button = document.getElementById('mon-bouton');
  button.addEventListener('click', function() {
    // votre code pour mettre à jour le tableau ici
  });
   }
   async function getPlayer(gameId, playerName) {
    const resource_url = host + "/get-player?game_id=" + gameId + "&player_name=" +
   playerName;
    const response = await getData(resource_url);
    if (!response.ok) {
    return {player_name: playerName, battle_field: {vessels: []}};
    } else {
    return response.json();
    }
   }   