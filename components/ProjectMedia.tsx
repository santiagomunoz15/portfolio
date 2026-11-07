'use client';
import { assetPath } from '@/lib/assets';
import { useState } from 'react';
import { Play, Square } from 'lucide-react';
export default function ProjectMedia({name,alt}:{name:string;alt:string}){const [playing,setPlaying]=useState(false);return <div className="project-media"><img src={assetPath(`${name}-${playing?'demo.gif':'poster.jpg'}`)} alt={alt} loading="lazy"/><button onClick={()=>setPlaying(!playing)} aria-pressed={playing}>{playing?<Square size={11}/>:<Play size={11}/>} {playing?'Stop demo':'Play project demo'}</button></div>}
