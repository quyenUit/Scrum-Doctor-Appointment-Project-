import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import '../assets/css/ProgressBar.css'

const SymptomsInput = ({ currentPage }) => {
    const medicalSymptoms = [
        "yellow sputum",
        "cardiovascular finding",
        "hypercapnia",
        "heavy feeling",
        "ambidexterity",
        "polymyalgia",
        "stinging sensation",
        "shortness of breath",
        "palpitation",
        "hypokalemia",
        "prostatism",
        "blanch",
        "monocytosis",
        "noisy respiration",
        "pallor",
        "feces in rectum",
        "sneeze",
        "feeling hopeless",
        "sputum purulent",
        "swelling",
        "left atrial hypertrophy",
        "welt",
        "intermenstrual heavy bleeding",
        "ecchymosis",
        "phonophobia",
        "fear of falling",
        "rhonchus",
        "inappropriate affect",
        "anosmia",
        "adverse effect",
        "hacking cough",
        "lameness",
        "scar tissue",
        "wheezing",
        "breath sounds decreased",
        "Heberden's node",
        "hypothermia, natural",
        "hyperventilation",
        "neologism",
        "chest tightness",
        "atypia",
        "incoherent",
        "hemianopsia homonymous",
        "mydriasis",
        "constipation",
        "fatigue",
        "pain foot",
        "symptom aggravating factors",
        "unresponsiveness",
        "heme positive",
      "pin-point pupils",
      "stool color yellow",
      "groggy",
      "frail",
      "tremor",
      "mass of body structure",
      "large-for-dates fetus",
      "general discomfort",
      "feeling strange",
      "immobile",
      "redness",
      "asymptomatic",
      "worry",
      "urinary hesitation",
      "gravida 0",
      "history of - blackout",
      "hoard",
      "side pain",
      "hematocrit decreased",
      "moan",
      "unhappy",
      "dysdiadochokinesia",
      "heavy legs",
      "unconscious state",
      "headache",
      "bradykinesia",
      "paralyse",
      "bedridden",
      "hirsutism",
      "clammy skin",
      "pain abdominal",
      "intoxication",
      "mediastinal shift",
      "cardiomegaly",
      "decreased body weight",
      "breakthrough pain",
      "achalasia",
      "rambling speech",
      "claudication",
      "rapid shallow breathing",
      "indifferent mood",
      "agitation",
      "no status change",
      "dyspnea",
      "lesion",
      "nasal discharge present",
      "lightheadedness",
      "r wave feature",
      "hematochezia",
      "titubation",
      "lethargy",
      "alcohol binge episode",
      "cushingoid facies",
      "focal seizures",
      "hyponatremia",
      "flushing",
      "jugular venous distention",
      "bedridden",
      "myoclonus",
      "passed stones",
      "satiety early",
      "excruciating pain",
      "pain chest",
      "nightmare",
      "hypokinesia",
      "out of breath",
      "dysuria",
      "sleeplessness",
      "terrify",
      "retch",
      "cardiovascular event",
      "hypertonicity",
      "nervousness",
      "giddy mood",
      "muscle twitch",
      "abscess bacterial",
      "pulse absent",
      "pain neck",
      "mood depressed",
      "scratch marks",
      "aura",
      "sinus rhythm",
      "awakening early",
      "vision blurred",
      "gravida 10",
      "st segment elevation",
      "abdominal tenderness",
      "retropulsion",
      "dizzy spells",
      "asthenia",
      "decompensation",
      "systolic ejection murmur",
      "hemodynamically stable",
      "fever",
      "absences finding",
      "nasal flaring",
      "dizziness",
      "abdomen acute",
      "motor retardation",
      "hypometabolism",
      "hypoproteinemia",
      "clumsiness",
      "t wave inverted",
      "macule",
      "hepatomegaly",
      "hypersomnia",
      "photophobia",
      "rale",
      "transsexual",
      "non-productive cough",
      "energy increased",
      "no known drug allergies",
      "projectile vomiting",
      "pansystolic murmur",
      "tired",
      "homelessness",
      "extreme exhaustion",
      "scleral icterus",
      "egophony",
      "overweight",
      "breech presentation",
      "room spinning",
      "gag",
      "mental status changes",
      "flare"];
    
  return (
   <div>
     <div className="ProgressBar">
      <ProgressBar />
     </div>
    <form>
      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-state"
        >
          What is your symptoms?
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="">Select a symptom</option>
            {medicalSymptoms.map(symptom => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="text-center my-6">
          <Link to="/SetAppointment">
            {/* Specify the route you want to navigate to */}
            <Button className="" title="Next" />
          </Link>
        </div>
      </div>
    </form>
   </div>
  );
};

export default SymptomsInput;
