import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <div className="containt about" style={{ padding: '2rem' }}>
        <h2>About Our Resort</h2>
        <p>
          One of the most attractive and inviting spots along the Black sea coast is the village of Kiten, where the forests of the
          Strandza mountain chain join the limpid depths of the sea.The picturesque environment is crowned by a pair
          of exotic bays - Atliman to the north and Karaach, located in its southern end. Between them, out into the
          sea, is the peninsula with the mythic name of Urdoviza, where as late as Liberation (1978), the eastern rocky
          end supported the walls of the king&apos;s castle, which gave the name of the settlement itself. Who the king
          actually was no one knows and how he met its end remains a secret...
        </p>
        <Image className="left-pic" src="/images/kiten1.jpg" alt="Kiten" width={400} height={300} />
        <p>
          Were it not for the legends, hidden in the songs of the land.Kiten&apos;s first name is Urdoviza in honour of Stana Urdoviza -
          A beautiful Bulgarian, desired by the Turkish Padishah who was so in love with her, that he abolished taxation
          for the whole of the Strandza region. Her horse - and Stana herself - found their death on the northern beach
          - a wonderful, tranquil place bearing the name of Atliman (Horse&apos;s bay).Kiten was found by refugees from
          the Odrin region of Thrace in 1932, who populated small &quot;sharon&quot; houses, named after the settlement plan,
          designed by a Frenchman of the same name. One noted agronomist from Vasilkovo (today&apos;s Tsarevo), named Pencho
          Krotkov, gave the place its present day name of Kiten because seen from afar the place reminded him of bunch
          of flowers (the Bulgarian for bunch is &quot;kitka&quot;). The Kiten resort is located in the south-eastern eastern
          of Bulgaria&apos;s Black sea coast, 55 kilometers from the city of Burgas, 5 to the south of the Primorsko municipality.
          The peninsula cliffs are steep and about 10-15 meters high. This land formation is 120 meters long and 60
          to 80 meters wide.The major attractions of the Kiten territory and of vital importance for its tourist industry
          are the two picturesque bays - Karaagach and Atliman - and their beaches. The village of Kiten has two sand
          beaches with a total area of about 145 000 square meters. The northern beach or &quot;Kiten Atliman&quot; is located
          at the extreme end of the Atliman bay. It has an area of 81 000 square meters and includes some beautiful
          dunes. The southern beach is located in the Urdoviza bay and somewhat more opened to the sea.
        </p>
        <Image className="right-pic" src="/images/kiten2.jpg" alt="Kiten" width={400} height={300} />
        <p>
          The length of this beach is 1380 meters and its southern end reaches the mouth of the Karaagach river, while to the north
          - the closer end of the rocky peninsula Urdoviza, now hosting the quay. The &quot;Balkanika&quot; marine base offers
          a number of facilities for practicing sports like boating, and sailing, scuba diving and fishing, marine
          archaeology, yachting, water skis, etc playgrounds, swimming pools etc. Both beaches have facilities and
          equipment for water-wheels, surfing, jets and numerous beach gear - chais-longues, umbrellas, etc.
        </p>
      </div>
    </main>
  );
}
