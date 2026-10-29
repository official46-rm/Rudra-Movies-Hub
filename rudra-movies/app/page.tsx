"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Clapperboard, Compass, Menu, Search, Sparkles, X } from "lucide-react";

type Movie = { title: string; year: string; language: string; genre: string; score: string; shape: string; label: string; description: string };

const movies: Movie[] = [
  { title: "The Last Signal", year: "2026", language: "KANNADA", genre: "THRILLER", score: "8.4", shape: "signal", label: "RUDRA PICK 01", description: "One strange signal. A city full of secrets. Nothing is what it seems." },
  { title: "Neon Monsoon", year: "2025", language: "TELUGU", genre: "ACTION", score: "8.1", shape: "monsoon", label: "AFTER DARK", description: "When the rain comes down, the truth comes out." },
  { title: "Room No. 9", year: "2025", language: "HINDI", genre: "MYSTERY", score: "7.9", shape: "room", label: "HIDDEN GEM", description: "Every door has a story. This one should have stayed closed." },
  { title: "Wild Static", year: "2024", language: "KANNADA", genre: "DRAMA", score: "8.7", shape: "static", label: "CULT FAVOURITE", description: "A restless generation finds its voice in the noise." },
  { title: "Blue Hour", year: "2026", language: "TAMIL", genre: "ROMANCE", score: "7.6", shape: "blue", label: "SOFT SIGNAL", description: "Two strangers. One almost-forgotten summer." },
  { title: "Black Kite", year: "2024", language: "MALAYALAM", genre: "CRIME", score: "8.2", shape: "kite", label: "OFF THE GRID", description: "The hunter becomes the headline." },
];
const filters = ["ALL", "KANNADA", "TELUGU", "HINDI", "TAMIL", "MALAYALAM"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<Movie | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const shown = useMemo(() => movies.filter((m) => (filter === "ALL" || m.language === filter) && `${m.title} ${m.genre} ${m.language}`.toLowerCase().includes(search.toLowerCase())), [filter, search]);

  return (
    <main className="site-shell">
      <div className="topline"><span><span className="live-dot" /> YOUR NEXT OBSESSION STARTS HERE</span><span className="topline-right">INDEPENDENT CINEMA INDEX <span className="topline-mark">↗</span></span></div>
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Rudra Movies home"><span className="brand-icon"><Clapperboard size={22} strokeWidth={2.2}/></span><span>RUDRA<span className="brand-light">/MOVIES</span><small>THE STORY FINDER</small></span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#discover" onClick={() => setMenuOpen(false)}>Discover</a><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a><a href="#about" onClick={() => setMenuOpen(false)}>Our signal</a>
        </nav>
        <div className="nav-actions"><a className="submit-link" href="#discover">FIND A FILM <ArrowUpRight size={15}/></a><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> A DIFFERENT KIND OF MOVIE SITE <span className="eyebrow-no">№ 001</span></div>
          <h1>Stories<br/>hit <em>different.</em></h1>
          <p className="hero-text">Skip the endless scroll. Find films with a pulse — from local legends to the stories everyone missed.</p>
          <div className="hero-buttons"><a href="#discover" className="button-primary">Explore the index <ArrowDownRight size={17}/></a><a href="#collections" className="button-quiet">See our collections <span>↗</span></a></div>
          <div className="hero-foot"><span>CURATED FOR THE CURIOUS</span><span>01 — 06 / THE FIRST DROP</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract cinematic artwork"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="art-cut cut-one"/><div className="art-cut cut-two"/><div className="art-stamp">R<br/>M</div><div className="art-caption"><span>FRAME / 001</span><strong>BEYOND<br/>THE OBVIOUS.</strong><span>RUDRA VISUAL DEPARTMENT</span></div><span className="vertical-note">FIND YOUR NEXT FAVOURITE ↗</span></div>
      </section>

      <section className="ticker" aria-label="Genres"><div className="ticker-track"><span>LOCAL STORIES</span><b>✳</b><span>BIG FEELINGS</span><b>✳</b><span>HIDDEN GEMS</span><b>✳</b><span>NO BORING PICKS</span><b>✳</b><span>LOCAL STORIES</span><b>✳</b><span>BIG FEELINGS</span><b>✳</b><span>HIDDEN GEMS</span><b>✳</b></div></section>

      <section className="discover section-pad" id="discover">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> THE INDEX</div><h2>Pick your <em>next.</em></h2></div><p>Not another list. A handpicked starting point for wherever your mood takes you.</p></div>
        <div className="tools-row"><div className="filter-row" role="group" aria-label="Filter by language">{filters.map((f) => <button key={f} className={filter === f ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(f)}>{f}</button>)}</div><label className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search title, mood, language…" aria-label="Search movies"/>{search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={15}/></button>}</label></div>
        <div className="results-note"><span>{String(shown.length).padStart(2,"0")} TITLES IN VIEW</span><span>SCROLL LESS. FEEL MORE. <span className="lime-text">✳</span></span></div>
        {shown.length ? <div className="movie-grid">{shown.map((movie, i) => <article className="movie-card" key={movie.title} style={{ animationDelay: `${i * 50}ms` }}><button className={`poster poster-${movie.shape}`} onClick={() => setSelected(movie)} aria-label={`View ${movie.title} details`}><span className="poster-top"><span>{movie.label}</span><span>↗</span></span><span className="poster-art"><span className="poster-symbol">{movie.shape === "signal" ? "〰" : movie.shape === "monsoon" ? "✳" : movie.shape === "room" ? "▧" : movie.shape === "static" ? "≋" : movie.shape === "blue" ? "◒" : "⌁"}</span></span><span className="poster-bottom"><span className="poster-genre">{movie.genre} / {movie.year}</span><strong>{movie.title}</strong><span className="poster-language">{movie.language} <span>•</span> <span className="rating">★ {movie.score}</span></span></span><span className="poster-open">OPEN FILE <ArrowUpRight size={14}/></span></button><div className="card-meta"><span>RM—{String(movies.indexOf(movie)+1).padStart(3,"0")}</span><span>FEATURED SIGNAL <span className="lime-text">↗</span></span></div></article>)}</div> : <div className="empty-state"><Sparkles size={25}/><h3>No signal found.</h3><p>Try another title or switch the language filter.</p><button className="button-primary" onClick={() => {setSearch("");setFilter("ALL")}}>Reset the index ↗</button></div>}
      </section>

      <section className="collections section-pad" id="collections"><div className="collection-intro"><div className="eyebrow"><span className="eyebrow-line"/> MOOD-BASED DISCOVERY</div><h2>Choose a<br/><em>rabbit hole.</em></h2><p>Sometimes you don't need a genre. You need a feeling.</p></div><div className="collection-list"><a href="#discover" onClick={() => setFilter("KANNADA")} className="collection-item"><span className="collection-number">01</span><span className="collection-title">Homegrown heat<small>Kannada stories with a point of view</small></span><span className="collection-arrow">↗</span></a><a href="#discover" onClick={() => setFilter("ALL")} className="collection-item"><span className="collection-number">02</span><span className="collection-title">The midnight file<small>Twists, tension & one-more-scene energy</small></span><span className="collection-arrow">↗</span></a><a href="#discover" onClick={() => setFilter("ALL")} className="collection-item"><span className="collection-number">03</span><span className="collection-title">Feel everything<small>Films that stay after the credits</small></span><span className="collection-arrow">↗</span></a></div></section>

      <section className="manifesto section-pad" id="about"><div className="manifesto-symbol">R<span>✳</span></div><div><div className="eyebrow"><span className="eyebrow-line"/> THE RUDRA SIGNAL</div><h2>Good stories<br/>don't need <em>hype.</em><br/>They need finding.</h2><p>Rudra Movies is a cinema discovery concept built around curiosity, regional voices and films worth talking about. This starter uses sample titles — swap them for your own verified catalogue.</p></div><div className="manifesto-index">EST. FOR THE<br/>CURIOUS<br/><span>INDIA / EVERYWHERE</span></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-icon"><Clapperboard size={20}/></span><span>RUDRA<span className="brand-light">/MOVIES</span><small>THE STORY FINDER</small></span></a><span className="footer-note">MADE FOR MOVIE PEOPLE. © 2026 RUDRA MOVIES</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>

      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="movie-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details"><X/></button><div className={`modal-art poster-${selected.shape}`}><span className="modal-art-label">{selected.label}</span><span className="modal-art-symbol">{selected.shape === "signal" ? "〰" : selected.shape === "monsoon" ? "✳" : selected.shape === "room" ? "▧" : selected.shape === "static" ? "≋" : selected.shape === "blue" ? "◒" : "⌁"}</span></div><div className="modal-copy"><div className="eyebrow"><span className="eyebrow-line"/> MOVIE FILE / {selected.year}</div><h2 id="modal-title">{selected.title}</h2><div className="modal-tags"><span>{selected.language}</span><span>{selected.genre}</span><span>★ {selected.score}</span></div><p>{selected.description}</p><p className="modal-disclaimer">Sample catalogue entry. Add verified details and official viewing links before publishing.</p><button className="button-primary" onClick={() => setSelected(null)}>Back to the index <ArrowUpRight size={16}/></button></div></section></div>}
    </main>
  );
}
