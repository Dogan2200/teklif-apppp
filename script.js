function satirEkle() {
    const tablo = document.getElementById("teklifTable").getElementsByTagName('tbody')[0];
    const yeniSatir = tablo.insertRow();

    yeniSatir.innerHTML = `
        <td><input type="text" name="firmaAdi"></td>
        <td><input type="text" name="stokAdi"></td>
        <td><input type="text" name="urunGrubu"></td>
        <td><input type="text" name="departman"></td>
        <td><input type="text" name="satinAlanSirket"></td>
        <td><input type="text" name="birim"></td>
        <td><input type="number" name="birimFiyat"></td>
        <td>
            <select name="paraBirimi">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="TRY">TRY</option>
            </select>
        </td>
        <td><input type="number" name="iskonto"></td>
        <td><input type="number" name="kdv"></td>
        <td><input type="number" name="teminSuresi"></td>
        <td><button type="button" onclick="satirSil(this)">Sil</button></td>
    `;
}

function satirSil(btn) {
    const satir = btn.parentNode.parentNode;
    satir.parentNode.removeChild(satir);
}
