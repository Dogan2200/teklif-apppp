function loadOffers() {
    const result = document.getElementById('offer-results');
    result.innerHTML = `
        <h3>Teklif Karşılaştırması</h3>
        <table border="1" cellpadding="5">
            <tr>
                <th>Firma</th>
                <th>Ürün</th>
                <th>Birim Fiyat</th>
                <th>Para Birimi</th>
            </tr>
            <tr>
                <td>Tekman</td>
                <td>BOX PROFILE 40X40</td>
                <td>1.76</td>
                <td>USD</td>
            </tr>
            <tr>
                <td>Ceceli</td>
                <td>BOX PROFILE 40X40</td>
                <td>1.83</td>
                <td>USD</td>
            </tr>
        </table>
    `;
}
