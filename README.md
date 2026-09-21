# Velattomaks 13.10.2027

Yhden sivun dashboard, joka seuraa matkaa kohti velattomuutta tavoitepäivään **13.10.2027**.

Näyttää:
- countdownin tavoitepäivään
- edistymispalkin (maksettu vs. jäljellä)
- tavoitetahdin (€/kk)
- maksuhistorian 2016–2026
- käynnissä olevat oikeusprosessit erikseen nostettuna
- skenaariot sille, paljonko maksettavaa jää jos oikeusjutut voitetaan
- velkalistan, anonymisoituna velkakohtaisesti (A–V)

## Sivut ja tiedostot

| Tiedosto | Mitä |
| --- | --- |
| `index.html` | Etusivu: laskuri, edistyminen, oikeusprosessit, skenaariot, velkalista |
| `minusta.html` | Kuka olen, miksi luvut ovat julkisia, mitä tämä ei ole |
| `yhteistyo.html` | Yhteistyöperiaatteet: kenen kanssa teen töitä ja kenen kanssa en |
| `data.js` | **Kaikki luvut.** Jaettu kaikille sivuille |
| `styles.css` | Jaetut tyylit |

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
