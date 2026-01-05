document.addEventListener("DOMContentLoaded", function () {

  const defaultBags = {
    "Milano Fan Pack New York": 2,
    "Milano Fan Pack London": 2,
    "Milano Queen Furious Red": 2,
    "Milano Nano Las Vegas Black": 1,
    "Mond QS Red": 1,
    "Mond Nano Blue": 2,
    "Mond Nano White": 2,
    "Momento Nano Black Jet Wave": 1
  };

  const bagCriteria = { "Retail": {
    Kabul: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Herat: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Kandahar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jalalabad: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Mazar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Ghazni: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Konduz: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jozjan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Khost: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      "Poli Khomre": { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Parwan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Badakhshan: {  "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 }
  },
  "Semi-Wholesale": {
    Kabul: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Herat: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Kandahar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jalalabad: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Mazar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Ghazni: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Konduz: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jozjan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Khost: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      "Poli Khomre": { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Parwan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Badakhshan: {  "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 }
 
  },
  "Wholesale": {
    Kabul: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Herat: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
    Kandahar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jalalabad: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Mazar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Ghazni: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Konduz: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jozjan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Khost: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      "Poli Khomre": { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Parwan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Badakhshan: {  "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 }
}
 };
  const raffleCriteria = {  "Retail": {
      Kabul: { "Mond Nano Blue": 5, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Herat: { "Mond Nano Blue": 7, "Milano Queen Furious Red": 3, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Kandahar: { "Mond Nano Blue": 3, "Milano Queen Furious Red": 5, "Mond Nano White": 1, "Milano Fan Pack New York": 3, "Milano Fan Pack London": 1 },
      Jalalabad: { "Mond Nano Blue": 6, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Mazar: { "Mond Nano Blue": 6, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 4, "Mond Nano White": 1, "Milano Fan Pack New York": 3, "Milano Fan Pack London": 1 },
      Ghazni: { "Mond Nano Blue": 12, "Milano Queen Furious Red": 2, "Mond Nano White": 1, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 1 },
      Konduz: { "Mond Nano Blue": 8, "Milano Queen Furious Red": 1, "Mond Nano White": 2, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Jozjan: { "Mond Nano Blue": 5, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Khost: { "Mond Nano Blue": 7, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      "Poli Khomre": { "Mond Nano Blue": 6, "Milano Queen Furious Red": 1, "Mond Nano White": 2, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
      Parwan: { "Mond Nano Blue": 4, "Milano Queen Furious Red": 1, "Mond Nano White": 1, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 },
   Badakhshan:{"Mond Nano Blue": 1,"Milano Queen Furious Red": 1,"Mond Nano White": 1,"Milano Fan Pack New York": 1,"Milano Fan Pack London": 1 }
    },
    "Semi-Wholesale": {  
      Kabul: { "Mond Nano Blue": 6, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Herat: { "Mond Nano Blue": 8, "Milano Queen Furious Red": 4, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Kandahar: { "Mond Nano Blue": 4, "Milano Queen Furious Red": 6, "Mond Nano White": 2, "Milano Fan Pack New York": 4, "Milano Fan Pack London": 2 },
      Jalalabad: { "Mond Nano Blue": 7, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Mazar: { "Mond Nano Blue": 7, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Helmand: { "Mond Nano Blue": 3, "Milano Queen Furious Red": 5, "Mond Nano White": 2, "Milano Fan Pack New York": 4, "Milano Fan Pack London": 2 },
      Ghazni: { "Mond Nano Blue": 13, "Milano Queen Furious Red": 3, "Mond Nano White": 2, "Milano Fan Pack New York": 3, "Milano Fan Pack London": 2 },
      Konduz: { "Mond Nano Blue": 9, "Milano Queen Furious Red": 2, "Mond Nano White": 3, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Jozjan: { "Mond Nano Blue": 6, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Khost: { "Mond Nano Blue": 8, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      "Poli Khomre": { "Mond Nano Blue": 7, "Milano Queen Furious Red": 2, "Mond Nano White": 3, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Parwan: { "Mond Nano Blue": 5, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Badakhshan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 }
    },
    "Wholesale": {
      Kabul: { "Mond Nano Blue": 34, "Milano Queen Furious Red": 2, "Mond Nano White": 5, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Herat: { "Mond Nano Blue": 56, "Milano Queen Furious Red": 19, "Mond Nano White": 3, "Milano Fan Pack New York": 6, "Milano Fan Pack London": 2 },
      Kandahar: { "Mond Nano Blue": 24, "Milano Queen Furious Red": 37, "Mond Nano White": 1, "Milano Fan Pack New York": 20, "Milano Fan Pack London": 1 },
      Jalalabad: { "Mond Nano Blue": 48, "Milano Queen Furious Red": 2, "Mond Nano White": 1, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Mazar: { "Mond Nano Blue": 48, "Milano Queen Furious Red": 4, "Mond Nano White": 5, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2 },
      Helmand: { "Mond Nano Blue": 13, "Milano Queen Furious Red": 28, "Mond Nano White": 1, "Milano Fan Pack New York": 19, "Milano Fan Pack London": 1 },
      Ghazni: { "Mond Nano Blue": 97, "Milano Queen Furious Red": 14, "Mond Nano White": 5, "Milano Fan Pack New York": 9, "Milano Fan Pack London": 2 },
      Konduz: { "Mond Nano Blue": 59, "Milano Queen Furious Red": 5, "Mond Nano White": 16, "Milano Fan Pack New York": 4, "Milano Fan Pack London": 6 },
      Jozjan: { "Mond Nano Blue": 40, "Milano Queen Furious Red": 3, "Mond Nano White": 3, "Milano Fan Pack New York": 3, "Milano Fan Pack London": 1 },
      Khost: { "Mond Nano Blue": 50, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 1 },
      "Poli Khomre": { "Mond Nano Blue": 45, "Milano Queen Furious Red": 5, "Mond Nano White": 11, "Milano Fan Pack New York": 3, "Milano Fan Pack London": 3 },
      Parwan: { "Mond Nano Blue": 28, "Milano Queen Furious Red": 3, "Mond Nano White": 4, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 1 },
      Badakhshan: { "Mond Nano Blue": 4, "Milano Queen Furious Red": 1, "Mond Nano White": 5, "Milano Fan Pack New York": 1, "Milano Fan Pack London": 1 }
    }
};

  function updateTargets() {
    const region = document.getElementById("region").value;
    const customerType = document.getElementById("customerType").value;
    if (!region || !customerType) return;

    document.querySelectorAll("#bagTable tbody tr").forEach(row => {
      const product = row.children[0].innerText.trim();
      let bagValue = defaultBags[product] || 0;
      if (bagCriteria[customerType]?.[region]?.[product] != null) {
        bagValue = bagCriteria[customerType][region][product];
      }
      row.querySelector(".bag").innerText = bagValue;

      let raffleValue = "–";
      if (raffleCriteria[customerType]?.[region]?.[product] != null) {
        raffleValue = raffleCriteria[customerType][region][product];
      }
      row.querySelector(".raffleTarget").innerText = raffleValue;
    });
  }

  document.getElementById("region").addEventListener("change", updateTargets);
  document.getElementById("customerType").addEventListener("change", updateTargets);

  const calculateBtn = document.getElementById("calculate");

  calculateBtn.addEventListener("click", function () {
    calculateBtn.classList.remove("clicked");
    void calculateBtn.offsetWidth;
    calculateBtn.classList.add("clicked");

    const region = document.getElementById("region").value;
    const customerType = document.getElementById("customerType").value;
    if (!region) return alert("Please select region");
    if (!customerType) return alert("Please select customer type");

    const rows = document.querySelectorAll("#bagTable tbody tr");

    let orders = [], bags = [], allOrdered = true;

    rows.forEach(r => {
      const orderQty = +r.querySelector(".order").value || 0;
      orders.push(orderQty);
      const bagValue = +r.querySelector(".bag").innerText || 0;
      bags.push(bagValue);
      if (orderQty <= 0) allOrdered = false;
    });

    let mhrOuters = 0, mhrBags = 0, indOuters = 0, indBags = 0;

    if (allOrdered && orders.length > 0) {
      const minOrder = Math.min(...orders);
      mhrOuters = orders.reduce((sum, o) => sum + minOrder, 0);
      const bonus = minOrder * 2;
      const minOrderBags = bags.reduce((sum, val) => sum + (minOrder * val), 0);
      mhrBags = bonus + minOrderBags;

      orders.forEach((o, i) => {
        const excess = o - minOrder;
        if (excess > 0) {
          indOuters += excess;
          indBags += excess * bags[i];
        }
      });
    } else {
      orders.forEach((o, i) => {
        indOuters += o;
        indBags += o * bags[i];
      });
    }

    document.getElementById("mhrOuters").innerText = mhrOuters || "Not Eligible";
    document.getElementById("mhrOuters").style.color = mhrOuters ? "black" : "red";
    document.getElementById("mhrOuters").style.fontWeight = mhrOuters ? "normal" : "bold";

    document.getElementById("mhrBags").innerText = mhrBags;
    document.getElementById("indOuters").innerText = indOuters || 0;
    document.getElementById("indBags").innerText = indBags;
    document.getElementById("totalOuters").innerHTML = `<b>${mhrOuters + indOuters}</b>`;
    document.getElementById("totalBags").innerHTML = `<b>${mhrBags + indBags}</b>`;
    document.getElementById("maxBags").innerText = mhrBags + indBags;

    let tickets = [];
    rows.forEach(r => {
      const product = r.children[0].innerText.trim();
      if (raffleCriteria[customerType]?.[region]?.[product]) {
        const ordered = +r.querySelector(".order").value || 0;
        tickets.push(Math.floor(ordered / raffleCriteria[customerType][region][product]));
      }
    });
    const totalTickets = tickets.length ? Math.min(...tickets) : 0;
    document.getElementById("raffleStatus").innerText = totalTickets > 0 ? "Eligible" : "Not Eligible";
    document.getElementById("raffleStatus").className = totalTickets > 0 ? "eligible" : "not-eligible-text";
    document.getElementById("raffleTickets").innerText = totalTickets;
    document.getElementById("maxTickets").innerText = totalTickets;
  });

});

