# Velattomaks 13.10.2027

Yhden sivun dashboard, joka seuraa matkaa kohti velattomuutta tavoitepäivään **13.10.2027**.

Näyttää:
- countdownin tavoitepäivään
- edistymispalkin (maksettu vs. jäljellä)
- tavoitetahdin (€/kk)
- maksuhistorian 2016–2026
- käynnissä olevat perintä- ja oikeusprosessit, anonymisoituna (1–6)
- velkalistan, anonymisoituna velkojittain (A–N)

## Käyttö

Avaa `index.html` selaimessa. Ei riippuvuuksia.

## Päivitys

Kaikki luvut ovat `index.html`-tiedoston lopussa `DATA`-objektissa. Lisää maksuja tai
täytä puuttuvat velkasummat, niin countdown, edistymispalkki ja tahti laskevat uudet
arvot automaattisesti.

`DATA.debts` on velkojittainen kokonaistilanne ja `DATA.cases` käynnissä olevat
prosessit. Prosessin tila kerrotaan `status`-kentässä:

| status | merkitys |
| --- | --- |
| `settling` | vastapuoleen ollaan yhteydessä, sovinnon mahdollisuutta selvitetään |
| `court` | käräjäoikeuden käsittelyssä, arvioitu käsittelyaika 12–24 kk |
| `appeal` | hävitty käräjäoikeudessa, asia hovioikeuden käsittelyssä |

Summat, laskurit ja tilastokortit lasketaan näistä kahdesta listasta; mitään lukua ei
ole kovakoodattu sivun HTML:ään.
