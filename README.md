# Velattomaks 13.10.2027

Yhden sivun dashboard, joka seuraa matkaa kohti velattomuutta tavoitepäivään **13.10.2027**.

Näyttää:
- countdownin tavoitepäivään
- edistymispalkin (maksettu vs. jäljellä)
- tavoitetahdin (€/kk)
- maksuhistorian 2016–2026
- käynnissä olevat oikeusprosessit erikseen nostettuna
- skenaariot sille, paljonko maksettavaa jää jos oikeusjutut voitetaan
- kootut yhteystiedot maksuttomiin tukipalveluihin
- velkalistan, anonymisoituna velkakohtaisesti (A–V)

## Sivut ja tiedostot

| Tiedosto | Mitä |
| --- | --- |
| `index.html` | Etusivu: laskuri, edistyminen, oikeusprosessit, skenaariot, velkalista |
| `minusta.html` | Kuka olen, miksi luvut ovat julkisia, mitä tämä ei ole |
| `apua.html` | Maksuttomat tukipalvelut: peliongelma, velat, ulosotto, kriisiapu |
| `yhteistyo.html` | Yhteistyöperiaatteet: kenen kanssa teen töitä ja kenen kanssa en |
| `data.js` | **Kaikki luvut.** Jaettu kaikille sivuille |
| `styles.css` | Jaetut tyylit |
| `og.png` | Jakokuva somelinkeille (1200×630) |
| `tools/og.html` | Jakokuvan lähde — muokkaa ja renderöi uudelleen (ks. alla) |
| `sitemap.xml`, `robots.txt` | Hakukoneille |

## Käyttö

Avaa `index.html` selaimessa. Ei riippuvuuksia, ei build-vaihetta.
Vercelissä `cleanUrls` on päällä, joten sivut vastaavat osoitteissa `/minusta` ja `/yhteistyo`.

## Päivitys

Kaikki luvut ovat `data.js`-tiedoston `DATA`-objektissa. Lisää maksuja tai
täytä puuttuvat velkasummat, niin countdown, edistymispalkki ja tahti laskevat uudet
arvot automaattisesti.

`DATA.debts` on yksi rivi per perinnässä oleva velka. Jos velka on oikeusprosessissa,
se merkitään `status`-kentällä — samat velat nostetaan silloin automaattisesti myös
"Käynnissä olevat prosessit" -listaan ja omiin tilastokortteihinsa:

| status | merkitys |
| --- | --- |
| `settling` | vastapuoleen ollaan yhteydessä, sovinnon mahdollisuutta selvitetään |
| `court` | käräjäoikeuden käsittelyssä, arvioitu käsittelyaika 12–24 kk |
| `appeal` | hävitty käräjäoikeudessa, asia hovioikeuden käsittelyssä |

Ilman `status`-kenttää velka on tavallinen perintävelka. Summat, laskurit ja
tilastokortit lasketaan tästä yhdestä listasta; mitään lukua ei ole kovakoodattu
sivun HTML:ään.

## Jakokuvan päivitys

`og.png` on renderöity `tools/og.html`-tiedostosta. Jos muokkaat sitä, aja
sivusto paikallisesti ja renderöi uudelleen headless-selaimella:

```
python3 -m http.server 8000
headless_shell --disable-gpu --no-sandbox --hide-scrollbars \
  --virtual-time-budget=8000 --window-size=1200,630 \
  --screenshot=og.png http://localhost:8000/tools/og.html
```

Käytä nimenomaan headless shell -binääriä; tavallisessa Chromiumissa
näkymä jää ikkunaa matalammaksi ja kuvan alareuna leikkautuu.

Kuvassa ei ole velkasummia tarkoituksella: ne vanhenisivat, eikä
vanhentunut luku sovi läpinäkyvyyteen perustuvaan projektiin.
