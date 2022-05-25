import { Accordion } from 'react-bootstrap'
import Image from 'next/image'

function Display() {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>The Problem</Accordion.Header>
          <Accordion.Body>
            <>
              <h4>Environmental impact of chemical fertilizer</h4>
              <p>
                A major problem with the use of fertilisers occurs when they are
                washed off the land by rainwater into rivers and lakes. The
                increase of nitrates or phosphates in the water encourages algae
                growth, which forms a bloom over the water surface. This
                prevents sunlight reaching other water plants, which then die.
                Bacteria break down the dead plants and use up the oxygen in the
                water so the lake may be left completely lifeless.
                <br></br>
                <sub>
                  <a href='https://www.bbc.co.uk/bitesize/guides/z7rxsbk/revision/2#:~:text=A%20major%20problem%20with%20the,water%20plants%2C%20which%20then%20die.'>
                    Source
                  </a>
                </sub>
              </p>
            </>
            <>
              <h4>Surging price of chemical fertilizer</h4>
              <p>
                The price of chemical fertilizer has more than doubled in
                Nigeria, with dire implications for food security. The average
                price of a 50kg NPK fertilizer mostly used by Nigerian
                small-scale farmers, has surged by 112.5% to N17,000 from N8,000
                last year.
              </p>
              <sub>
                <a href='https://businessday.ng/big-read/article/fertiliser-prices-double-in-threat-to-nigerias-food-security/#:~:text=The%20price%20of%20fertiliser%20has,year%2C%20according%20to%20BusinessDay%20checks.'>
                  Source
                </a>
              </sub>
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Our Solution</Accordion.Header>
          <Accordion.Body>
            <>
              <h4>Our way</h4>
              <p>
                It is increasingly clear that biofuels can be a viable source of
                renewable energy in contrast to the finite nature, geopolitical
                instability, and deleterious global effects of fossil fuel
                energy.
              </p>

              <p>
                Our solution leverages an existing technology and put it to good
                use innovatively.
              </p>

              <p>
                We turn biogradeable waste into energy, it is not magic, it is
                science.
              </p>
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Technology and Science</Accordion.Header>
          <Accordion.Body>
            <>
              <h4>Anaerobic Digestion</h4>
              <p className='mb-3'>
                Anaerobic digestion is a process through which bacteria break
                down organic matter—such as animal manure, wastewater biosolids,
                and food wastes—in the absence of oxygen.
              </p>
              <Image src={'/assets/anaerobic.png'} width={500} height={400} />
              <h4 className='mt-3'>How we do it</h4>
              <p>
                We collect the waste and mix it with some amendments to make a
                suitable condition for the bacteria to initiate the digestion.
                We get biogas and digestate as the end result.
              </p>
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Working pipeline</Accordion.Header>
          <Accordion.Body>
            <>
              <Image
                src={'/assets/concept-flow.png'}
                width={700}
                height={400}
              />
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Research</Accordion.Header>
          <Accordion.Body>
            <div className='my-3'>
              <p>
                More than 70% of Nigerian farmers get their fertilizer from the
                local market. Source{' '}
                <a href='https://nigeria.opendataforafrica.org/spniqxb/nigeria-fertilizer-consumption'>
                  NBS
                </a>
              </p>
              <Image src={'/assets/source.png'} width={700} height={400} />
            </div>
            <div>
              <p>
                About 60% of methane gas can be produced by having bacteria
                break down human feces{' '}
              </p>
              <sub>
                <a href='https://phys.org/news/2015-11-human-excrement-fuel-world.html#:~:text=Biogas%E2%80%94about%2060%20percent%20methane,and%20Health%20said%20on%20Tuesday.'>
                  Source
                </a>
              </sub>
            </div>
            <div>
              <p>NPK 20.10.10 price analysis</p>
              <Image src={'/assets/npk-jan-mar.png'} width={700} height={400} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Display
