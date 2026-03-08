export interface AmsterdamGuideSection {
  id: string;
  title: string;
  emoji: string;
  description: string;
  content: string;
}

export const amsterdamGuideSections: AmsterdamGuideSection[] = [
  {
    id: 'social-links',
    title: 'Social Links',
    emoji: '!',
    description: 'Important social links and community groups for VU students.',
    content: `
:::info
This guide contains information collected and written by students who have lived in Amsterdam and attend the VU for a good amount of time. While we have ensured that most of the information is indeed correct please always consult other sources as well. We hope you enjoy your stay here!
:::

## AI Student Groups

### WhatsApp Groups

* [Year 1 AI WhatsApp](https://chat.whatsapp.com/Fax2ctVh49w3fyAgl9wAAJ)
* [Year 2 AI WhatsApp](https://chat.whatsapp.com/JzJTIzprbHIAmjnlw2i6pe)

### Student Organizations

* StudSec - Dutch Student CyberSecurity Association (Based at the VU)
  * [VU Cyber Security Group Discord](https://url.studsec.nl/discord)
  * [Website](https://studsec.nl)

---

*The [CS Discord](https://discord.gg/MGG72qsKrn) and [CS Resource Hub](https://cs-hub.notion.site/CS-Hub-6e7cae889f844cb59ae5f1809c88e553) may also be useful if you are interested in CS-related content.*
`,
  },
  {
    id: 'life-in-amsterdam',
    title: 'Life in Amsterdam',
    emoji: '\u{1F3E1}',
    description: 'Links relating to life in Amsterdam and the VU.',
    content: `
[**Public transport**](https://9292.nl/en/)

Plan your public transport journeys across the Netherlands. You can also get your [OV-chipkaart here](https://www.ov-chipkaart.nl/everything-about-travelling/different-types-of-passenger/students.htm).

[**Sports**](https://sportcentrumvu.nl/en/)

The VU offers many sports facilities so feel free to explore them.

[**Student ID card**](https://vu.nl/en/student/registration-and-enrolment/student-card)

The student ID card is useful for various purposes on campus.

[**Life in Amsterdam**](https://www.reddit.com/r/Amsterdam/comments/9frcwf/the_ultimate_amsterdam_survival_and/)

This is an excellent guide from reddit we highly recommend you read through.

[**Housing**](https://docs.google.com/document/d/1ozPf7sfI6Auh0GI2xT_g7csGCrKKj4tCFkUJP1WMfyI/edit)

This is an excellent google doc with housing resources, the same resources are also copied over on the last page of this site.

[**General guides (subreddit)**](https://www.reddit.com/r/StudyInTheNetherlands/)

This subreddit contains a lot of good information and resources, there is some overlap with what is contained here and some elaboration with certain respects - check the pinned posts.

Credit to [u/SwainTheMain](https://www.reddit.com/user/SwainTheMain/) for creating these guides.
`,
  },
  {
    id: 'apps',
    title: 'Apps',
    emoji: '\u{1F4F1}',
    description: 'Important apps which might be useful for day-to-day life in Amsterdam.',
    content: `
### Public Transport

**NS** for train travel. Generally not a good idea to use this for local public transport.

**GVB** for tram, bus, and metro travel in Amsterdam only.

**9292** for all public transport that uses OV-chipkaart/OVpay, e.g. trains, trams, bus, ferry.

:::danger
It is generally not a good idea to use Google/Apple Maps for public transport, as these services are not directly tied to the public transport companies and therefore may give outdated or inaccurate information. See the Public Transport section for more info.
:::

---

### Biking

**Fietsersbond Routeplanner** for vastly improved bicycle directions compared to Google Maps. The app is only available in Dutch, but can be figured out using common sense.

:::warning
Make sure to follow the biking laws! See [this video](https://www.youtube.com/watch?v=x-cYZo5kToM) regarding signs, as well as following the advice in the Biking section!
:::

---

### Food Delivery

**Uber Eats / Thuisbezorgd / Deliveroo** for ordering food.

:::info
A lot of times restaurants have their own websites where ordering from is generally cheaper than Uber Eats and often gives you benefits. So make sure to look up where you wanna order from online before you use an app.
:::

### Food Pickup

**Too Good To Go (TGTG)**

:::info
You can get a lot of really cheap good stuff from here. You just reserve it on the app then show your phone at the counter when you arrive. Highly recommended!
:::

---

### Payment

**PayPal** for payment, especially good for online stuff. Purchases using iDeal will be handled via your bank's mobile app.

**Revolut / Bunq** for payment and crypto. You can also get a credit & debit card via Revolut if registered in NL.

---

### Weather

**Buienradar and Buienalarm** are hyperlocal weather apps.

---

### Taxi Services

**Uber / Bolt** for taxi services.

:::info
Generally not advisable due to high cost and reliable public transport, except during late night hours from 1-5 AM, but always check if a night bus is available.
:::

---

### Government Services

**DigiD** is a government digital identity, tied to your BSN (Burger Service Nummer).

:::danger
It is required to log in to certain government services as well as health insurance websites.
:::
`,
  },
  {
    id: 'public-transport',
    title: 'Public Transport',
    emoji: '\u{1F68A}',
    description: 'Information on various aspects of public transport within and around Amsterdam.',
    content: `
## General

* Public transport tickets are flexible. This means that when you buy a ticket for your route, you are allowed to take any train/bus/whatever to your destination at any time, as long as it is on that carrier and within the time allotted.
* Generally, trains are more expensive than trams/busses/ferries, but go further distances.
* Instead of purchasing single tickets every time you use public transport, go and get an OV-chipkaart. These public transport cards are valid on all public transport across the country, with very few exceptions.
* Anonymous OV-chipkaarts (blue front) are very much like any other city's normal transport card. They can be loaded with credit repeatedly, as well as certain products.

![This is how the OV chipkaarts look](https://lh5.googleusercontent.com/boFna8FwXPwT4hO3WaOFMUsn1KJ9twI-9Ljtu01CE4OOHYWvOPIj-YR0IRSzEgrva-qOT_4GaH6mOs1YTuG45GQFkGV0lQOdpoloktDcOZ-P7hN8ZebMtUQW3Og9CAIBn0J22ThkPDNePv8WaFXqxjg)

* Personal OV-chipkaarts (yellow front, recommended!) are tied to you. They can be loaded with transport products for discounts, tied to your bank account, etc. You must have a Dutch bank account to get one of these.
* OV-chipkaarts can only be used for transport, OV-fiets rental, and bike parking (see the Biking section). The new OVpay system has been introduced, coinciding with OV-chipkaart, that allows contactless card and mobile payment for public transport.
* If you are travelling together with someone who has a discount during peak hours, make sure to get a Samenreiskorting (travel together discount) loaded onto your OV-chipkaart. This will allow you to travel for a reduced fare as long as you stay with the person who has a discount.
* You are not allowed to go in loops on public transport. That is, if you are starting at Amsterdam Centraal, you are not allowed to take a train to Schiphol, not check out, and travel back to Amsterdam to get a free trip. You must check out whenever leaving a station. Ticket inspectors will check for this.
* Speaking of not checking out, don't forget to check in and out on public transport. Failure to check out usually means you pay a lot of money for a journey you didn't take, although this can usually be refunded if you fill out some forms.

:::info
**A neat tip,** you don't necessarily have to check out when physically leaving trams/busses. These methods usually have little screens on the card readers that show the next stop. When you see your stop on the screen, you can check out, even if the vehicle has not stopped moving yet. This way, you can exit quicker without holding up others.
:::

* Make sure to check out and back in when transferring between operators, i.e. NS and GVB. At stations with shared train platforms (Amsterdam Amstel, Duivendrecht, etc) there are convenient posts where you can quickly do this without passing through ticket barriers.
* When planning ahead, always have the assumption that you will miss the intended bus/tram/metro and will take the one after.
* If GVB messes up somehow, and there is no bus within 20 minutes anywhere near you and you are stranded, you can get a taxi and ask for a reimbursement from them.

---

## Trains

![This is a train, incredible](https://lh4.googleusercontent.com/x2qWH-HuWmVFc9OTjQL8zmhQzJ2BHwl8dQeQ0ihFNe_1rpct0UugvISAMbT1RWKzMTWsiCDjoDWXrKXGiXT5Veg8iNTFRpNkqFEjql6oHUd_zDL8_HegAZqtZjhYKozXa5537_52zdHRwwTP79v7cO8)

* Non-folding bicycles are allowed on board for a fee during off-peak hours, weekends, and public holidays. Folding bikes are always allowed for free.
* Be aware of train composition - there are times where trains are split into two sections, which will uncouple somewhere along the route and go in two different directions. Listen carefully to announcements and read the destination boards. Consult screens as sometimes an animation is played indicating this. If the train speaks Dutch for more than a minute, ask your local Dutch person in panic.
* "Rijdt niet" = cancelled.
* Riding in first class is almost never necessary. First class is not much better at all and should only be considered if the train is super busy and you want to sit down.
* Intercity services do not stop at all stations. Sprinter services do (with very few exceptions).
* Sometimes, trains may be cancelled due to work on the tracks. In most cases, replacement bus services will be provided, although for longer distances it is advisable to just find a different train route. Follow signs for NS buses. NOTE: NS buses will not run if there is a strike!
* You may take German IC(E) trains on an OV-chipkaart, as long as your destination is within the Netherlands. ICE trains require an extra fee, unless you have the student travel product. You may not take trains that require a reservation (Thalys, Eurostar, Nightjet) with an OV-chipkaart.
* Travelling on the Intercity direct services from Amsterdam to Rotterdam requires an extra fee if your journey goes between Schiphol and Rotterdam CS. There are fare poles on station platforms to pay this fee before entering the train.
* Departure boards on platforms show you the final destination, departure time, and coach makeup of trains.

![Departure board](https://lh6.googleusercontent.com/5zho5AMk2Tcc8HJowJonrGjf1XnmIE5FxSiwNhQ1WooDgYslfNigJG-3ZlZbQPsZZr9ReRZh2yXvsKfLotwvTdGy-I_Y9PKSwE9V0WsG1g2LOjWKG6lNuq-gdXXyYCrdKlmtVh6b42N4ROt9Dy0ZuP0)

  * Departure times are accompanied by a countdown timer in the last 10 minutes before a train leaves
  * Coach makeup diagrams also have a train direction indicator. The screens are perpendicular to the tracks, which makes it a bit confusing. Just imagine pushing the screen, rotating it so that it's parallel with the tracks and the arrow will show you which way the train will go.
  * You can use the coach makeup diagrams to find where your train will stop. If you see 6 coaches, look for a blue diamond-shaped sign with a 6 on it nearby the track. This is where the front of the train will stop.

* If you forgot to check in because you caught the train last minute (from a station with only poles instead of ticket barriers), try to find an inspector as soon as possible. Their natural habitat is around first class seats, or hiding in the rear-facing driver's cab (in which case you need to wait until the next station). If you end up being found out without a ticket and you have an OV-chipkaart, you will:
  * For the first time: be charged the normal fare and given a ticket
  * For the second time and onwards: a 50 euro fee is appended to the normal ticket price
  * If you don't carry any form of ID, the train will wait for the police to escort you to the nearest police station, making everyone unhappy.

---

## Trams/Busses

* You may not take your non-folding bike on board. Folding bikes are fine.
* On trams and buses, you must request stops. Generally this is more required on buses, as trams usually stop anyway but always signal trams just in case.
* On the older GVB trams you can press the green buttons to open the doors early, before the tram stops. The doors will then open for you automatically when the tram stops.
  * On the newer trams, just press the button when it illuminates.

![A tram](https://lh6.googleusercontent.com/2P27pWp9A9njftr2KQxSvJnWqykKpi6iNqUy7fuNmYgibycvNU1lCWB6mDaDn1q3e_VMW4CAJX53NxVXNmhC1CHtKJPLxxd5wzlBow4qneBaMUy0ynDYhyXrNNDfHWFd7r8dXnLNrF_pZ8oizfFD92s)

## Metro

![GVB Amsterdam](https://lh3.googleusercontent.com/36A8X95Ktyjekdd7wSRvyturI38KsF5pzWCh-IFmcj5kwuWe9UvWloiJk1TeuLijI7VtR_qTQBiOa2w1Sy3q2ghOOBHpfFq3F9pD8AJ5YIsibWEpPmf74xc99SLP8wmic-5Bfq73RE0Tqng_aAz6fTI)

![RET Den Haag/Rotterdam](https://lh5.googleusercontent.com/XesOM-F4tbnj6zCVwDvc2xlcU2pwHIt-VlRrSeNU7xwU3RAKukyXiP_TBHknj-WOr3--ADZoZar_FdFjFDvyP1GBJOA4xqIhjjNnBiTlDVaTezl79xdIjyWSNOBf2f2WJYeX_j1WanSdAh_rrxTyHkI)

* See the bike rules for trains. Allowed for a fee only during off-peak hours, weekends, holidays. Folding bikes are always allowed for free.
* Metro trains in the Netherlands run on shared tracks. Lines typically share stops with one or more other lines on large portions of their route. Take this into account when planning your journey, or just have an app do it for you (9292.nl).
* Departure boards show destination, countdown timer, and coach makeup (when the train is about to arrive). Be aware that some trains are shorter than others, and trains typically do not take up the entire platform.

---

## Amsterdam Ferries

![A ferry](https://lh4.googleusercontent.com/dcGnVizXMZsFO-H9SEZa18klDtLqasI-XHDerEyclfMR7wLQVWOcFOgPmWkDITfPHJEqVL6YQePMbpukG1gbnmQfpyyomvJPmnZ_lyVwJniwaBuZaPmpOI3xT8ee2H-WLfs0yr5UPxk8wZf220UkW4Q)

* Free to use. Departs from various locations along the Ij river, mostly next to Amsterdam CS (back of the station). Bikes and pedestrians only on most, but some further out (like the one near Zaandam) allow cars.
* If you're a pedestrian it may be more convenient to just take metro 52 from Centraal Station to Noorderpark or Noord, however this is obviously not free.
* Do not attempt to play cool and jump off the ferry or platform, as not only you will miserably fail, but make everyone angry and delay the whole ecosystem by 30 minutes.
`,
  },
  {
    id: 'internships',
    title: 'SWE & AI Internships',
    emoji: '\u{1F392}',
    description: 'Guide on internship opportunities for AI and software engineering students.',
    content: `
If you just want the summary for what to do then jump to the bottom of the page.

## Non-EU/EEA

:::danger
Non-EU/EEA students face significant restrictions for internships in the Netherlands. Talk with your study advisor about options, such as getting an internship as part of your thesis. Some companies can sponsor work permits, but this is less common for internships.
:::

## Time Points for Internship Applications

A commonly asked question is:

> When am I actually supposed to look for internships?

So I hope this guide can maybe put your minds at ease, there are generally a bunch of different points, and you should not feel pressured. Focus on passing your studies, and seek out opportunities when you feel the time is right.

#### Y1: First Year

:::danger
**Be careful** with internships here. If you are not experienced, focus on building your programming skills and portfolio. Don't worry too much about internships yet.
:::

* If you already have experience you can apply to regular internships, though note that competition is high
* Look for workshop programs and introductory opportunities on LinkedIn — companies like Uber sometimes offer programs for Y1/Y2 students that can lead to internships

#### Start of Y2: Summer Internships

:::warning
Strongly recommended to apply. These are aimed at Y2 students, often have approachable skill requirements (mainly DSA / LeetCode / HackerRank), and are a great way to get your foot in the door.
:::

* Primarily **targeted** at Year 2 students
* Competitive with low entry barriers; usually require *little specific skill*; do require good DSA knowledge though
* Larger companies may offer these (Amazon, Databricks, Booking.com, Optiver, etc.), though not widely available in smaller firms

#### During Y2: Student Internships

* Accessible to all students throughout the academic year
* Generally accept both Msc and Bsc students
* Consider focusing on opportunities designed for BSc students; internships that also accept Msc will be more competitive if you don't have too much prior experience

#### Y3: Strategic Course Selection + Internships

:::info
A common strategy is to choose lighter elective courses during your final year and do an internship on the side. Design your course load to leave room for professional experience.
:::

* Doing an internship alongside lighter courses is a good strategy if you want to have it done during your studies
* If you design your schedule well it can potentially be the best opportunity aside from summer internships

#### Y3: Thesis Internship

:::danger
This is another **very good point** for looking into internships, because it has essentially no overlap with your courses. The companies might not overlap with your interests but I would still highly recommend to explore options at this point.
:::

#### (If you defer) After Y3: Student Internship

:::info
**If you defer you have to pay tuition**, so this strategy is not recommended for international students if you cannot afford to stay longer. The VU will pay you back a part of your tuition if you graduate halfway through your deferred year. But again **YOU HAVE TO PAY TUITION IF YOU DEFER, ONLY DO THIS IF YOU CAN AFFORD IT**
:::

* If you defer you retain your student status which should still allow you to apply for both student and regular internships

## Where to Find Opportunities

### Dutch Tech Companies

The Netherlands has a strong tech ecosystem. Companies to look at include:

* **Booking.com** — Amsterdam-based, large engineering org, regular internship programs
* **Adyen** — Payments technology, Amsterdam HQ
* **TomTom** — Location technology and mapping, Amsterdam
* **Picnic** — Online grocery, tech-driven, Amsterdam
* **ASML** — Semiconductor equipment, Eindhoven (hardware + software roles)

### AI Ecosystem in Amsterdam

Amsterdam has a growing AI scene with research labs and companies:

* University research groups (VU, UvA) often have student assistant or research positions
* Startups in the Amsterdam AI ecosystem — check [Amsterdam AI](https://amsterdam-ai.com/) for an overview
* Corporate AI labs from larger companies (Qualcomm AI Research, Elsevier, Ahold Delhaize)

### Finding Listings

* **LinkedIn** — You will probably find the most relevant job listings here. If you have a good profile and some basic activity, recruiters will sometimes reach out to you

## Additional Strategies

**Honors**

* If you have a GPA of 7.5, *even if you don't want to do Honors, **just apply***. They do company get-togethers which might be helpful for networking. A key thing to remember: *you do not have to do Honors courses to be in Honors*. You of course will not get the actual title if you don't do the courses, but you can still leverage being in Honors during your studies for networking.

**STORM student association**

* [STORM](https://svstorm.nl/) is a student association for CS, Math and AI students which also does networking events. Their membership fee is around 15 EUR. Worth signing up for events and getting to know more people. They sometimes organize company visits and career events that are particularly relevant for AI students.

**Career Fairs**

* There are a few career fairs usually yearly, remember to check your VU mail every now and then.

**Advent of Code**

* This is a programming competition website which hosts daily programming problems for the month of December until Christmas morning (25th). It's a great way to practice your programming skills and looks good on your CV.

## Summary

To summarize, some recommendations for what to do in each year:

### Year 1

* Make a LinkedIn and a GitHub account (populate them just with basic information)
* Sign up to [STORM](https://svstorm.nl/)
* Try out [Advent of Code](https://adventofcode.com/) in December
* Apply to Honors if you have a GPA >= 7.5
* Look out for programming competitions late in the school year
* Start exploring AI/ML topics that interest you

### Year 2

* Try and populate your GitHub or LinkedIn with anything you did (it's fine if nothing yet)
* Again do AoC (some more good practice)
* Maybe over the year explore some things you find interesting in your personal time
  * personal projects (especially AI/ML projects)
  * Kaggle competitions
  * open-source contributions

### Year 3

* At this point try and have at least 1 project on your GitHub, make sure your LinkedIn is clean
* Have a resume — [this template](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs) is more than enough
* Start just looking at some job listings to get an idea of the market
* Check [Magnet.me](https://magnet.me/) and [StageVinder](https://stagevinder.nl/) regularly

And of course at all these points see if you can find any good opportunities for an internship. And the one thing to remember:

*IMPORTANT -> YOU ARE PROBABLY MORE SKILLED THAN YOU THINK, IT NEVER HURTS TO APPLY, GOOD LUCK!*
`,
  },
  {
    id: 'living-costs',
    title: 'Living Costs & Advice',
    emoji: '\u{1F4B5}',
    description: 'Costs of living and advice for budgeting your money.',
    content: `
## Groceries

### Albert Heijn

This is one of the most expensive grocery stores. If you want to checkout the prices of goods they have a [website](https://www.ah.nl/). Unless you specifically like something in AH or you have the money to afford the markup it wouldn't really be a top recommendation.

[App for android](https://play.google.com/store/apps/details?id=com.icemobile.albertheijn&hl=nl&pli=1) | [App for apple](https://apps.apple.com/nl/app/albert-heijn-supermarkt/id327535329)

:::danger
**BE AWARE OF AH TOGO MARKUP**, they often times have a 25 - 50% markup on their already inflated prices. They are often located near metro stations for people that wanna go quickly in and out, but just beware that they have just outright stupid pricing.
:::

#### Bonus Card

If you do decide to go to AH its highly recommended that you get a bonus card, to avoid carrying around added stuff you can just download the app and get a digital card, you can then just scan the barcode on the app during checkout and you can sometimes get discounts on certain items marked BONUS in the store or added to your Bonus Box in the app.

:::info
In the app also checkout the Bonus Box, this is a custom selection of items which you can apply a discount to.
:::

#### Bonus Card sharing

:::danger
While you likely cant get in trouble for using someone else's card if you decide to share your card basically the worst thing that can happen is that the AH deactivates your bonus card.
:::

**Custom cards**

Due to the popularity of AH there is [a community](https://www.reddit.com/r/persoonlijkebonus/) of people that share bonus cards which have special deals. You should just be able to download the images of the barcodes and then scan them at checkout to activate whatever deal is active on the bonus card of the person sharing.

**Plain cards**

Alternatively if you just forgot your bonus card but you still want some of the deals that just exist within the store then you can just get a plain card barcode from [this website](https://bonuskaart-ah.nl/) or [this website](https://randombonuskaart.nl/) this is a plain bonus card which should at least give you the normal deals in the store.

:::warning
**To reiterate**, the **BONUS** discounts you will see in AH *only apply if you have the card* so if you just scan an item with a BONUS on it then this bonus will only apply if you actually scan a bonus card, something important to be aware of.
:::

---

### Dirk

This is one of the cheaper stores. To my knowledge there is no app currently available but they have a [website](https://www.dirk.nl/) which includes various sections on stuff that is currently reduced in pricing, its a really nice grocery store if you are working with a budget.

---

### Spar

This is a somewhat similar principle to AH togo (at least in Amsterdam), these are usually smaller stores located in places where you quickly drop in and out, **they also have a considerable markup** so just keep that in mind. Spar also has a [website](https://www.spar.nl/) and an app.

:::warning
Just not recommended if you are living on a tighter budget.
:::

[App for android](https://play.google.com/store/apps/details?id=no.norgesgruppen.apps.spar&hl=nl) | [App for apple](https://apps.apple.com/nl/app/spar-plus/id491909828)

---

### Lidl

Lidl is also on the cheaper side, it has a more built out tech side with a nice [website](https://www.lidl.nl/c/lidl-shop/s10008767) which includes offers and product pricing. It also has an app with a customer card similar to the bonus card from AH.

[App for android](https://play.google.com/store/apps/details?id=com.lidl.eci.lidlplus&hl=nl) | [App for apple](https://apps.apple.com/nl/app/lidl-plus/id1238611143)

---

### Jumbo

Jumbo is generally compared to AH in terms of pricing, as usual they have a [website](https://www.jumbo.com/) and an app. Jumbo similar to Lidl and AH also have a customer card which you should be able to activate within the app.

[App for android](https://play.google.com/store/apps/details?id=com.icemobile.jumboclient&hl=nl) | [App for apple](https://apps.apple.com/nl/app/jumbo/id936150402)

:::info
If you wanna go to Jumbo vs AH it really depends on the product offerings and the pricing, if you have either equidistant from your home then it doesn't really matter too much which you go to, in general I'd recommend to just look at what they offer and see where you can get it for cheaper or at all.
:::

#### Card sharing

Card sharing is also a thing here, for a random card generator checkout [this website](https://randomextrapas.nl/).

---

### Additional advice and tips

#### Use existing travel routes to your advantage

A really good strategy, especially if you don't have any grocery stores near you, is to see if there are any on the route to VU or just go to ones near VU, there is an AH XL (very large AH) near the campus. There is also one near the metro station Amsterdam Zuid which is nice to combine if you go to / come from the station anyways.

:::info
Also one thing of note is that VU does have a Spar on campus but remember the markup.
:::

#### Avoid prepackaged

This applies to basically all grocery stores, they often sell prepackaged vegetables or boxes which contain all the stuff for a meal. But most of the time, especially the stuff in plastic bags, has a considerable markup and goes bad *much* faster. So just buy fresh stuff that isn't precut / prepackaged.

---

### Grocery store summary

| Aspects | AH | AH to-go | Spar | Jumbo | Dirk | Lidl |
|---------|-----|----------|------|-------|------|------|
| Price | High | Very high | Very high | High | Low | Low |
| App | Yes | Yes | Yes | Yes | No | Yes |
| Locations | Many | Somewhat many | Somewhat many | Many | Somewhat many | Somewhat many |
| Products | Many | Not many | Not many | Many | Many | Many |

:::info
The general consensus with a lot of people is that you should do most of your shopping at Dirk or Lidl then for maybe the last 10% of your groceries go to AH or Jumbo, and remember to always look at bonuses/discounts if you're on a tight budget.
:::

---

## Furniture

:::info
**Stay minimal**, if you are likely going to move out again soon I would recommend you stick to the bare essentials when it comes to furniture, its a common problem when moving out having to get rid of furniture, so unless you are ok dealing with that stress and potentially wasting money on furniture you have to quickly sell/discard just stick with essentials.
:::

### IKEA

Kind of an obvious candidate, unless you are staying for a longer amount of time and maybe want some more high quality stuff IKEA is really good for 99% of what you need, they even do deliveries. You can easily kit out an **entire room** with anywhere from like 500 - 1000 EUR.

---

### Marktplaats

[Marktplaats](https://www.marktplaats.nl/) is the Netherlands' largest second-hand marketplace (like Craigslist/eBay classifieds). You can find furniture for a fraction of retail price. Many students sell their furniture when moving out, so there are always good deals available. Always meet in person and inspect items before paying.

---

### Kringloopwinkels (Thrift Stores)

Kringloopwinkels are second-hand/thrift stores found throughout Amsterdam and the Netherlands. They sell donated furniture, kitchenware, clothes, and more at very low prices. Great for finding affordable basics when setting up your room. Search "kringloopwinkel" on Google Maps to find ones near you.

---

### WhatsApp groups

One very easy way to get Furniture is to see if there is a group chat for the place you are living. Very often people moving out want to get rid of their furniture and will often sell it for extremely cheap or even just give it away since people rarely take it with them when moving, so its a great opportunity to snag really cheap furniture items.

:::info
If there is no existing WhatsApp group then I would strongly advise to make one. Its really beneficial to have at least some line of communication with your neighbors, you can just print out and hang an invite code in your hallway.
:::

---

## Appliances

While most places generally come stocked with the required appliances it can sometimes happen that you need something.

### CoolBlue

If you need appliances on a more short term basis or just really don't want to buy them then CoolBlue offers a subscription based service for appliances on [their website](https://www.coolblue.nl/en/subscriptions).

### MediaMarkt & BCC

[MediaMarkt](https://www.mediamarkt.nl/) and [BCC](https://www.bcc.nl/) are large electronics retailers where you can find appliances, electronics, and accessories. They often have sales and student deals.

### Second-hand Appliances

Check [Marktplaats](https://www.marktplaats.nl/) for second-hand appliances at a fraction of the retail price. Many students sell their appliances when moving out.

---

## Money-Saving Tips

* **Student travel product** — If eligible, activate your [student travel product](https://duo.nl/particulier/student-ov.jsp) for free or discounted public transport (weekdays or weekends)
* **Cook at home** — Eating out in Amsterdam is expensive. Cooking at home can save you hundreds per month
* **Too Good To Go (TGTG)** — Get surplus food from restaurants and supermarkets at a big discount via the app
* **Market days** — Visit street markets like [Albert Cuyp Market](https://albertcuypmarkt.amsterdam/) for cheap fresh produce, especially near closing time
* **Student discounts** — Always ask if there is a student discount. Many shops, museums, cinemas, and services offer reduced prices with a valid student ID

---

## Health insurance

### Finding insurance

:::danger
If you are a working student you **need Dutch health insurance, even if you have private.**
:::

If you need to find insurance, most commonly because you [started working](https://www.studyinnl.org/plan-your-stay/insurance), then you can use [this excellent tool](https://www.zorgwijzer.nl/zorgvergelijker/english#/search) to compare different plans. When deciding on which plan to get it depends on two things:

1. **You will use it**, in which case you should actually compare the different offerings, it will still be free if you apply for the healthcare allowance but be sure to check what you are getting here and if it fits your needs.
2. **You will likely not use it**, this probably applies for most people if you are a healthy individual and/or already have health insurance in your home country and can just go to the doctors there. In this case it doesn't really matter what you pick, the health care allowance covers the price.

### Getting it for free

:::warning
**If you are currently insured and have not applied** do not be worried, still apply as normal and they will pay you for all the months after the fact.
:::

This is probably the most important part, you want to apply for **Zorgtoeslag (healthcare allowance)** this is quite literally free money to pay for your *entire* health insurance, to apply for it go [HERE](https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/toeslagen)

:::warning
Be aware that if you apply for healthcare allowance for months which you are *not insured* you will **have to pay this money back**.

So make sure that when you apply for healthcare allowance, you only apply for the exact months you are covered. In the case you are working a parttime job this is precisely the months your work contract is valid.
:::

:::info
**Support**

Don't be afraid to contact the support, they are excellent at helping out, this can be a confusing process, and information can sometimes be weird when applying.
:::
`,
  },
  {
    id: 'health-safety',
    title: 'Health & Safety',
    emoji: '\u{1F49F}',
    description: 'Important information on what to do when things get serious.',
    content: `
## GP and Medical Non-Emergencies

GPs can usually be easily found on Google Maps. Search "huisarts" and pick the one closest to you. Their website should have a means of registering. You can also as a VU student register with the VUmc, however this is not a good idea if you live far from campus.

If you have an emergency, which is not life threatening but not bad enough to just be dismissed, call your local GP, even if you are registered there yet or not. If you are out of hours, HPA work for tourists and out of hour emergencies: [https://www.huisartsenpostenamsterdam.nl/](https://www.huisartsenpostenamsterdam.nl/). During working hours, unless you are about to die, you need referral to go to the ED in the hospital.

---

## Alcohol

Although you can easily get carried away during house parties and you can get wasted pretty fast (bacardi is pretty sneaky) it's important to know what to do when you, or your friend becomes unresponsive.

1. Make sure the person is breathing. It is vital to approach the person and ensure that their airway is clear, make them comfortable and lie down **sideways**
2. If you or the person is completely unresponsive, it is not easy to detect breathing or a heartbeat and or there is excessive vomiting, **call 112 ASAP**. If you are here legally, you are covered by EU medical insurance and **won't go bankrupt** so don't hesitate. It's better to have a call and the operator sending an officer to check on you than being sorry after.

---

## Spiking

Although uncommon within Amsterdam clubs and festivals, it is possible that you or somebody might get spiked. This is vital to act fast in order to ensure that you or your friend do not have more severe effects after.

### To *prevent* being spiked

Although this is relatively common sense, go with the motto of "out of sight, out of mind". Meaning that if you lose contact with your drink, and it's not with somebody you trust (and no the guy hooking up with you in the club is not to be trusted) do not attempt to continue the drink, just leave it and go get another one.

### To *detect* spiking

Use common sense and know everyone's limits. If a person suddenly gets drunk from one long island when they are heavy weight, then keep a close eye on them. Symptoms which don't correlate with being actually drunk are:

1. Muscle spasms (hand/eyes/face twitching)
2. Memory loss (can't recall people, or birthday and other distinct memories)
3. Confusion and stress (as in they will panic, or break down)
4. Breathing problems (e.g. hyperventilating)
5. Spiking substances which utilize MDMA or close, will have the effect of the other person suddenly being overly affectionate, smiling and just give a "high" feel. Pay attention to the jaw, as it tends to flex the muscles a lot.

If you do detect these, and you are confident that there is something off (always trust your gut feeling) **inform as many people as possible**. Tell the barman, the security guard, the guy collecting glasses or simply the girl next to you. It is vital to start spreading the word as there are certain procedures in place in clubs to quickly remediate this and call for help as soon as possible. It is **vital** to call an ambulance or visit a hospital as toxicology tests can reveal any imminent health concerns.

---

## Drugs

Amsterdam is famous for weed and hard drugs. If you do decide to take them its important to know how to do so safely.

### Sourcing drugs

For weed, coffee shops are all over the place and usually ok. Just when getting something make sure it's sealed in tubes or bags.

For hard stuff, **don't accept from street party dealers**. Ask around your dorm, friends and somebody will plug you in to a trusted and vetted source.

### Bad trips

It is vital to look beforehand what each drug does, and how much to take and have a designated trip carer. Most likely your dealer can help you in this too (to advise dosage and preparation).

:::warning
Never, ever go "omg let's just take a pill/tab/line for the first time"
:::

These drugs effect your chemical balance and can hurt you, sometimes permanently and fatally if you don't know what you are doing. However, if you did somehow do too much Google how to calm from a bad trip or call 112.

:::info
**You can't be arrested or fined from overdosing or having taken drugs.** So you are perfectly protected and safe.
:::

---

## A short summary

**Cocaine** - Too much coke usually leads to heart arrhythmia among other things, stop the person from taking more, try to sit them down and feed them a lot of water and stay with them

**LSD** - If its bitter **spit it out**. If you take too much then it's a **dangerous situation**. There is no trip escape, except maybe drinking water helps a tiny bit. Sometimes police intervention is needed so be careful and start very low.

**XTC** - You can't really have a bad trip on a good mindset. However, **do not take too much** cause it **might cause permanent damage**. **And don't take it if you get anxious easily**.

**Shrooms** - That's the safest, bad trip? Eat a lot of sugar and then you'll phase out fast.

**Other party drugs** - Consult Google or your dealer or local emergency services

Also, if you want to verify your dealer you can send samples of drugs for free and anonymously at [drugs-test.nl](https://www.drugs-test.nl/en/) in order to be sure of what you have.

---

## Sexual Health

Free STD checks at [GGD Amsterdam](https://www.ggd.amsterdam.nl/english/sti-hiv-sense/)

## Mental health

If you need mental health support and don't have basic dutch health insurance, follow [VU mental health care](https://vu.nl/en/student/student-wellbeing/mental-health-care). If you have basic dutch health care insurance, and have serious mental problems which need medication to treat, then go to your GP, who will in turn refer you to a mental clinic.

:::danger
**NOTE THE WAITING LINE is 6-8 MONTHS.** But urgent cases get priority, so don't hesitate to sign up.
:::
`,
  },
  {
    id: 'medical-expenses',
    title: 'Medical Expenses & Insurance',
    emoji: '\u{2764}\u{FE0F}',
    description: 'Understanding medical expenses and insurance coverage in the Netherlands.',
    content: `
When signing up at a hospital or dentist, it's common to provide insurance information for coverage verification. The process varies depending on coverage status, and here's a breakdown:

### Coverage Verification and Billing

1. **Covered Services:**
   * If a service is covered, the healthcare provider bills your insurance.
   * If not covered, you'll receive a bill either by mail or right after your appointment.
2. **Declaration Process:**
   * Some services, especially those not directly linked to the hospital, require a declaration.
   * You can submit a declaration form to your insurance, or for certain medications, the manufacturer may handle the declaration process.
3. **Uninsured Services:**
   * Certain medications or brands may not be covered.
   * The pharmacist will inform you, and you'll need to pay for them directly.
4. **Partial Coverage:**
   * If a service is partially insured, your insurance oversight will reflect this.
   * You might receive a deduction from your bank account or a notification about the remaining amount to be paid.

### Tips for Managing Medical Expenses

* Always confirm with your doctor if the prescribed brand is covered by insurance (either basic or own risk).
* Keep an eye on your insurance oversight regularly.
* Investigate if you see any out-of-pocket expenses, and check if they can be covered, possibly by contacting the manufacturer.

### Personal Experiences and Recommendations

* Some medications may require contacting the manufacturer for coverage.
* Monitor your insurance oversight for unexpected charges, especially with new medications.
* Consider depleting your own risk if you can, ensuring expenses above a certain amount are covered annually.

### Additional Advice

* Consult the pharmacist to inquire about covered brands before picking up a prescription.
* Remember, just because a prescription is given doesn't mean you have to claim it; you can refuse it.

Understanding the coverage details and actively managing your medical expenses can alleviate the potential challenges and unexpected costs associated with healthcare.
`,
  },
  {
    id: 'biking',
    title: 'Biking Guide',
    emoji: '\u{1F6B2}',
    description: 'A mostly comprehensive guide to biking in Amsterdam.',
    content: `
## General (unwritten) rules

* "uitgezonderd" = "excepted". If you see a do not enter/wrong way sign, but it says "uitgezondered fiets" underneath, you are allowed to bike down it anyway.
* Bike paths are usually delineated by red/maroon pavement or bricks, either as a small lane in the street or a dedicated path separate from the road. They may be other colors too, or just plain, but it should be fairly obvious where they are. If you do not see one, it is very likely you are on the wrong street and there is a parallel bike-friendly street nearby.
* Do not cycle on sidewalks unless there is no other option!
* Do not cycle on the wrong side of a 2-way cycle path or the wrong way down a one-way road when not excepted!
* Do not cycle in the middle of the street when a cycle path exists! (this is legally enforced!)
* When turning, especially if there are other bikers behind you, make sure to signal your turn by holding out a hand in the direction you're turning. For example, if turning left, extend your left hand outward (or bend your right arm 90 degrees upwards). For turning right just reverse this.
* When biking near tram tracks, make sure to go across them at an angle, especially with thin wheels. If you don't, your wheel may fall into the track and you'll fall off your bike.
* Always stay to the right. On streets with a one-way cycle path on each side, use the one on the right whenever convenient.
  * When on a path, also keep to the right of your lane. There is always someone who wants to overtake you.
* During the night and poor visibility (i.e. fog/stormy weather), you are legally required to have a front (white) and rear (red) light on and working. Additionally you legally need a functioning bell. You can be pulled over for this.
* **DO NOT TOUCH YOUR PHONE!** You may use your phone for navigation, but you cannot interact with it at all while moving. You will get fined 100 EUR if caught!
  * Listening to music with headphones, while potentially dangerous, is allowed while riding your bike. Use the transparency mode on your headphones if it has it.
* If you see "shark's teeth" on the ground pointing towards you, that means you must give way to approaching bike/car traffic.
  * Making eye contact with drivers is a great way to make them stop
  * You must always give way to pedestrians in the path. Feel free to ring your bell at them repeatedly though. Go to the area near Amsterdam Centraal Station if you want to practice this.

## Buying/Renting a bike

For people on a budget, your two options are:

* **Swapfiets** - Cheap and reliable long-term bike rental. Covers insurance, repairs, etc.
* **Tweedehands** - 2nd hand bikes. Find them on Marktplaats or most bike stores.

## Locking your bike

Lock your bike! Bikes in the Netherlands almost always have a ring lock (located below the chair) and a chain lock (either integrated into the ring lock or as a separate lock/key). Use both locks when in sketchy areas. Make sure to put the chain through the bike frame, at least one wheel, and something attached to the ground.

## Bike parking

Bike parking is widely available, although in busy areas it may be hard to find an available space. Nice parking is found at places marked "fietsenstalling", where there is usually a guard and 2-level racks. At many of these parking places, you must scan a bank card or OV-chipkaart to gain access.

![At these gates, you must place your bike's front wheel on the black pad before the gate will allow you to enter for the first time or exit with your bike.](https://lh6.googleusercontent.com/nfid9vZ-S4Qd_msweJq29gdj9FEC5KfXIVTGVGpDScajpInGinXrXBAn7ZsF5kx7Z9BBkqGZTZoZ0bWHuKz6g6S9Te9cPbrSp9FIeGKKQodY5N6XveQRQ3MbYhKQ_hp7yFNsUy3Q09wPiR1I44MrDXU)

Bike parking is almost always free for 24 hours, with an hourly/daily rate thereafter. Be aware of this!

## OV-fiets

OV-fiets bike rental is available at many NS stations for last-mile journeys, i.e. to get from the station to a business. You must load an OV-fiets subscription (which is free) onto your personal OV-chipkaart to access them. They cost a flat fare per 24 hours.

## Bikes on public transport

Taking your bike onto the trains and metro is only allowed during off-peak hours, weekends, and public holidays, and you must pay an extra fee at ticket machines. Taking your bike on buses and trams is not allowed. Taking a folding bicycle onto public transport of any type is always allowed.
`,
  },
  {
    id: 'free-stuff',
    title: 'Free Stuff',
    emoji: '\u{1F193}',
    description: 'A collection of free stuff you really should check out.',
    content: `
## Developer Tools

### GitHub Student Developer Pack

[**Sign up for the GitHub Student Developer Pack**](https://education.github.com/benefits?type=student)

With this pack you get access to a bunch of free things, some notable ones are:

* **GitHub Copilot** — Free AI code completion for students. Works in VS Code, JetBrains, and more
* **Free domain names** — Potentially good if you want a nice domain name for a portfolio page
* **Free cloud hosting** — Cloud credits for Azure, DigitalOcean, and others. Good for hosting projects, websites, or ML experiments
* **GitHub Pro plan** — As a student you are also a GitHub Pro member which comes with its own benefits

### JetBrains Free EDU Licenses

[**JetBrains Student Pack**](https://www.jetbrains.com/academy/student-pack/)

All JetBrains IDEs (IntelliJ, PyCharm, WebStorm, CLion, DataGrip, etc.) are free for students. These are professional-grade IDEs — especially useful for Python (PyCharm) and Java development.

### Figma Education

[**Figma for Education**](https://www.figma.com/education/)

Free access to Figma's professional plan for students. Great for UI/UX design, prototyping, and collaborative design work.

### Notion Education

[**Notion for Education**](https://www.notion.com/help/notion-for-education)

Free Notion Plus plan for students. Useful for note-taking, project management, and organizing your coursework.

---

## Software Discounts (NL-specific)

### Surfspot

[**Surfspot**](https://www.surfspot.nl/)

Dutch platform offering discounted software for students at Dutch universities. You can get Microsoft Office, Adobe Creative Cloud, and other software at significant discounts. Log in with your VU credentials.

---

## Entertainment & Culture

### Spotify Premium Student

[**Spotify Student**](https://www.spotify.com/nl/student/) — roughly 50% off the regular Premium price for verified students.

### Apple Music Student

[**Apple Music Student**](https://support.apple.com/en-us/108936) — discounted Apple Music subscription for students.

### Museumkaart

[**Museumkaart**](https://www.museumkaart.nl/) — for around EUR 69/year, you get free entry to 400+ museums across the Netherlands. Pays for itself after just a few visits. Great for rainy weekends in Amsterdam.
`,
  },
  {
    id: 'useful-links',
    title: 'VU Useful Links',
    emoji: '\u{1F578}\u{FE0F}',
    description: 'A consolidation of useful links for matters relating to the VU.',
    content: `
## Useful links from the VU website

* VU Books: [Link](https://www.vuboekhandel.nl/)
* Study Guide: [Link](https://studiegids.vu.nl/en/)
* Dashboard: [Link](https://vu.nl/en/dashboard)
* Timetable: [Link](https://rooster.vu.nl/schedule)

### VU Graduate Winter and Summer Schools

* Winter School: [Link](https://vu.nl/en/education/vu-graduate-winter-school)
* Summer School: [Link](https://vu.nl/en/education/summer-school)

### Entrepreneurship and Startups

* IXA - Helping Startups: [Link](https://www.ixa.nl/)
* Demonstrator Lab - Entrepreneur Hub: [Link](https://www.demonstratorlab.nl/projects/)

### Campus Safety and Support

* Safety on Campus: [Link](https://vu.nl/en/about-vu/more-about/safe-social-setting-on-campus)

### Student Support and Counselling

* Student Psychological Counsellors: [Link](https://vu.nl/en/student/contact-student-guidance-and-support/student-psychological-counsellor)
* Confidential Support: [Link](https://vu.nl/en/education/more-about/what-to-do-when-you-experience-undesirable-behaviour)
* General Counselling Service: [Link](https://vu.nl/en/education/more-about/student-general-counselling-service)

### Student Wellbeing

* Student Wellbeing: [Link](https://vu.nl/en/student/student-wellbeing)

### Career Resources

* VU Career Services: [Link](https://vu.nl/en/student/career-services)
* Amsterdam Career Days: [Link](https://www.amsterdamcareerdays.nl/)

### Sports and Recreation

* Sports Center: [Link](https://sportcentrumvu.nl/en/)

### VU Campus and Resources

* VU Calendar (Interesting Events): [Link](https://vu.nl/en/events)
* VU Library: [Link](https://vu.on.worldcat.org/v2?lang=eng)
* Online VU Book Search: [Link](https://vu.on.worldcat.org/v2)
* VU Study Places: [Link](https://vu-amsterdam.im-motion.net/)

### Special Programs

* Honors Program: [Link](https://vu.nl/en/education/honours)

### AI Organizations

* Amsterdam AI: [Link](https://amsterdam-ai.com/)
* AISO (AI Student Organization): [Link](https://aiso.ai/)
* ICAI (Innovation Center for Artificial Intelligence): [Link](https://icai.ai/)
* ALLAI (Alliance for AI): [Link](https://allai.nl/)

### VU Magazine

* University Magazine "Ad Valvas": [Link](https://www.advalvas.vu.nl/)

### VU History

* VU History (Short and Sweet): [Link](https://vu.nl/en/about-vu/more-about/history)
`,
  },
  {
    id: 'housing',
    title: 'Housing Resources',
    emoji: '\u{1F3D8}\u{FE0F}',
    description: 'Resources and tips for finding housing as a student in Amsterdam.',
    content: `
**Full credit to the student who made the [original doc](https://docs.google.com/document/d/1ozPf7sfI6Auh0GI2xT_g7csGCrKKj4tCFkUJP1WMfyI/edit) on which this page is based on**

### Places to Sign Up ASAP and Build Registration Time

* [Room.nl](https://www.room.nl/en/home)
* [Studentenwoningweb](https://www.studentenwoningweb.nl/en/)
* [WoningNet Regio Amsterdam](https://www.woningnetregioamsterdam.nl/) (This is social housing, also available for non-students. If eligible, sign up ASAP!)

### Places to Sign Up and Wait to Get Lucky

* [Stunest](https://www.stunest.nl/)
* [Student Experience](https://studentexperience.nl/en/)
* [Hicondo](https://www.hicondo.nl/en/)
* [The Student Hotel](https://www.thestudenthotel.com/)
* [Our Campus](https://www.ourcampus.nl/)

### Social Housing

* [Connect Sociuswonen](https://connect.sociuswonen.nl/)

:::warning
**Careful with the 5 links below**, everything else listed is from organizations but this is private sector renting, don't get scammed!
:::

* [Kamernet](https://kamernet.nl/en)
* [Kamer.nl](https://www.kamer.nl/en/)
* [HousingAnywhere](https://housinganywhere.com/s/Amsterdam--Netherlands)
* [Funda](https://www.funda.nl/huur/heel-nederland/)
* [Huurwoningen](https://www.huurwoningen.com)

### Income-Based Requirements

* [Roofz](https://www.roofz.eu/availability) (The other sites in the private sector listed above may or may not also ask for a minimum income, it just depends on the landlord.)

### Help Finding Rentals

* [RentSlam](https://rentslam.com/)

### Facebook Groups (BEWARE SCAMS)

* [Kamer Gezocht/Aangeboden in Amsterdam](https://www.facebook.com/groups/1695927010691648/)
* [Aangeboden in Amsterdam: kamers en appartementen](https://www.facebook.com/groups/237588910260110/)
* [Amsterdam Apartments 4 Rent](https://www.facebook.com/groups/amsterdam.apartments/)
* [Zoekt kamer in Amsterdam Community](https://www.facebook.com/groups/zoektkamerinamsterdam/)
* [Amsterdam rent a room, apartment or studio](https://www.facebook.com/groups/143224392751384/)
* [Amsterdam Student Housing](https://www.facebook.com/groups/amsterdamstudenthousing/)
* [Amsterdam rent a room (2)](https://www.facebook.com/groups/484600675031215/)
* [Student Housing Amsterdam](https://www.facebook.com/groups/577890138899102/)
* [Amsterdam Housing, Rooms, Apartments, Sublets](https://www.facebook.com/groups/251441185632701/)
* [Amsterdam Accommodations](https://www.facebook.com/groups/Amsterdam.Accommodations/)
* [ROOM AVAILABLE IN AMSTERDAM](https://www.facebook.com/groups/182547965445/)
* [Kamers en Appartementen Amsterdam](https://www.facebook.com/groups/kamersappartementenamsterdam/)
* [Roommate and Flat Finder Amsterdam](https://www.facebook.com/groups/amsterdamroomskamers/)
* [Woningen te huur in Amsterdam](https://www.facebook.com/groups/woningeninamsterdam/)

### Tips and Tricks

:::info
**Hot Tip #1** - Uni will recommend you Wendy from Expat services. She is a scam.
:::

:::info
**Hot Tip #2** - If it's too good, 99% a scam. ALWAYS ASK FOR A VIEWING AND FLOORPLANS FIRST BEFORE PAYING ANYTHING!
:::

:::info
**Hot Tip #3** - Finding a place to live is a full-time job! Go to viewings! Talk to people! Call around! Expect it to eat up a lot of time in your day.
:::

:::info
**Hot Tip #4** - Unless you really have no other option, get a place where you can register. You need a BSN and you need to have your address registered. Your life will be way harder without those things + you'll be forced to pay tourist tax.
:::

:::info
**Hot Tip #5** - During summer, a huge housing bubble forms as everyone begins searching for a new place to stay. As a result, prices inflate to exorbitant amounts. You may want to wait out this period at home, and come back around October after the bubble has burst.
:::

:::info
**Hot Tip #6** - Set alarms to receive newly listed rooms/apartments and call/reply ASAP. If you're techy enough, you could probably make a script for it :)
:::
`,
  },
  {
    id: 'student-finance',
    title: 'Student Finance Guide',
    emoji: '\u{1F4D1}',
    description: 'The ultimate guide to student finance, written by @daviklo.',
    content: `
The ultimate guide to student finance has been compiled in a comprehensive Google Doc:

[**Read the Ultimate Student Finance Guide**](https://docs.google.com/document/d/19bZOmYB75NXlQ6l8PE40R_UcyZ-VSAyYoJPfofmWaYo/edit)

This guide covers everything you need to know about student finances in the Netherlands.

*Credit to @daviklo for writing this guide.*
`,
  },
];
