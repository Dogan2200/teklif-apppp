function satirEkle() {
  var table = document.getElementById("teklifTablosu").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var cells = ['Stok Adı', 'Ürün Grubu', 'Departman', 'Firma Adı', 'Birim', 'Fiyat', 'KDV (%)', 'İskonto (%)', 'Temin Süresi', 'Dosya Yükle', 'Sil'];

  for (var i = 0; i < cells.length; i++) {
    var newCell = newRow.insertCell(i);
    if (cells[i] === 'Sil') {
      newCell.innerHTML = '<button onclick="satirSil(this)">❌</button>';
    } else if (cells[i] === 'Dosya Yükle') {
      newCell.innerHTML = '<input type="file">';
    } else {
      newCell.innerHTML = '<input type="text" placeholder="' + cells[i] + '">';
    }
  }
}

function satirSil(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function verileriKaydet() {
  alert("Teklifler kaydedildi! (Demo versiyon)");
}

function enIyiTeklifiGoster() {
  alert("En iyi teklif hesaplandı! (Demo versiyon)");
}
