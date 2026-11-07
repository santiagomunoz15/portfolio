import { ArrowDown, ArrowRight, Radio } from 'lucide-react';
import { assetPath } from '@/lib/assets';

const photos = [
  { file: 'car-workshop.jpg', alt: 'Osprey Racing number 44 Formula SAE car with its bodywork open in the workshop', caption: '01 / THE CAR', description: 'Osprey Racing · University of North Florida' },
  { file: 'team-paddock.jpg', alt: 'Osprey Racing team members and the Formula SAE car under the team canopy', caption: '02 / THE TEAM', description: 'Working together beyond the screen' },
  { file: 'car-running.jpg', alt: 'Osprey Racing number 44 car being driven through a paved course', caption: '03 / IN MOTION', description: 'The physical system behind the data' },
];

export default function FormulaSAE() {
  return (
    <section className="racing-section" id="work" aria-labelledby="racing-heading">
      <div className="section-heading racing-heading">
        <div>
          <span className="eyebrow">01 / REAL-WORLD ENGINEERING</span>
          <h2 id="racing-heading">Real car. Real team.<br /><span>Software with a physical purpose.</span></h2>
        </div>
        <a className="text-link" href="#racing-contribution">My contribution <ArrowDown size={14} /></a>
      </div>

      <figure className="racing-lead-photo">
        <img src={assetPath('racing/telemetry-workshop.jpg')} width="1800" height="1350" alt="ESP32 code open on a laptop beside the Osprey Racing Formula SAE car during workshop development" loading="lazy" />
        <figcaption><span><Radio size={13} /> OSPREY RACING / FORMULA SAE</span><span>IN THE WORKSHOP · UNF</span></figcaption>
      </figure>

      <div className="racing-story" id="racing-contribution">
        <div className="racing-intro">
          <span className="eyebrow">TELEMETRY & DATA ACQUISITION · AUG 2026 — PRESENT</span>
          <h3>From the car<br />to a clearer picture.</h3>
          <p>I’m part of Osprey Racing’s telemetry and data acquisition subteam at the University of North Florida. I work on the software that brings vehicle sensor data into tools the team can use to understand driver performance and suspension behavior.</p>
          <p>The car is a team effort. My contribution connects embedded data collection, telemetry storage, and visualization.</p>
          <div className="tags"><span>ESP32 WROVER</span><span>Bluetooth</span><span>InfluxDB</span><span>Prometheus</span><span>Grafana</span><span>MoTeC i2 Pro</span></div>
        </div>
        <div className="racing-contributions" aria-label="My Formula SAE contributions">
          <div><span className="racing-step">01</span><div><h4>Collect & transmit</h4><p>I developed an ESP32 WROVER telemetry pipeline to stream real-time sensor data over Bluetooth.</p></div></div>
          <div><span className="racing-step">02</span><div><h4>Store & visualize</h4><p>I integrated InfluxDB and Prometheus with custom Grafana dashboards for driver-performance analysis and suspension diagnostics.</p></div></div>
          <div><span className="racing-step">03</span><div><h4>Analyze & support testing</h4><p>I modeled track geometry in Blender and analyzed vehicle logs in MoTeC i2 Pro to support driver-in-the-loop testing.</p></div></div>
        </div>
      </div>

      <div className="racing-pipeline" aria-label="Telemetry data flow">
        <span className="eyebrow">THE DATA PATH</span>
        <div><span>Vehicle sensors</span><ArrowRight aria-hidden="true" size={14} /><span>ESP32 + Bluetooth</span><ArrowRight aria-hidden="true" size={14} /><span>Time-series storage</span><ArrowRight aria-hidden="true" size={14} /><span>Team dashboards</span></div>
      </div>

      <div className="racing-gallery">
        {photos.map(photo => <figure key={photo.file}>
          <img src={assetPath(`racing/${photo.file}`)} alt={photo.alt} width="1200" height="900" loading="lazy" />
          <figcaption><span>{photo.caption}</span><p>{photo.description}</p></figcaption>
        </figure>)}
      </div>
    </section>
  );
}
