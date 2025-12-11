export default function Terminal() {
  return (
    <div className="terminal-window w-full max-w-3xl">
      <div className="terminal-header">
        <div className="terminal-btn terminal-btn-red"></div>
        <div className="terminal-btn terminal-btn-yellow"></div>
        <div className="terminal-btn terminal-btn-green"></div>
        <div className="terminal-title">valtteri@macbook — zsh</div>
      </div>

      <div className="terminal-body">
        <div className="mb-6">
          <p>
            <span className="t-green">valtteri@macbook</span>
            <span className="t-dim">:</span>
            <span className="t-blue">~</span>
            <span className="t-dim">$</span> <span className="t-white">cat about.txt</span>
          </p>
          <div className="mt-2 pl-0">
            <p className="t-yellow text-xl font-bold mb-2">Valtteri Juvonen</p>
            <p>I enjoy creating fast, beautiful interfaces and</p>
            <p>experiences for humans to enjoy.</p>
          </div>
        </div>

        <div className="mb-6">
          <p>
            <span className="t-green">valtteri@macbook</span>
            <span className="t-dim">:</span>
            <span className="t-blue">~</span>
            <span className="t-dim">$</span> <span className="t-white">cat contact.txt</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-x-6">
            <span><span className="t-dim">email:</span> <span className="t-cyan">valtteri@vjxsoft.com</span></span>
            <span><span className="t-dim">github:</span> <span className="t-cyan">github.com/Itsdarkhere</span></span>
          </div>
        </div>

        <div className="mb-6">
          <p>
            <span className="t-green">valtteri@macbook</span>
            <span className="t-dim">:</span>
            <span className="t-blue">~</span>
            <span className="t-dim">$</span> <span className="t-white">ls technologies/</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span className="t-blue">React</span>
            <span className="t-purple">React Native</span>
            <span className="t-orange">Swift</span>
            <span className="t-blue">Next.js</span>
            <span className="t-green">Node.js</span>
            <span className="t-yellow">Python</span>
            <span className="t-blue">TypeScript</span>
            <span className="t-red">Git</span>
            <span className="t-cyan">CoreML</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span className="t-blue">Docker</span>
            <span className="t-red">Redis</span>
            <span className="t-cyan">Postgres</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span className="t-yellow">AWS</span>
            <span className="t-red">Hetzner</span>
            <span className="t-cyan">DigitalOcean</span>
            <span className="t-orange">Cloudflare</span>
          </div>
        </div>

        <div className="mb-6">
          <p>
            <span className="t-green">valtteri@macbook</span>
            <span className="t-dim">:</span>
            <span className="t-blue">~</span>
            <span className="t-dim">$</span> <span className="t-white">cat experience.log</span>
          </p>

          <div className="mt-4">
            <p className="t-yellow font-bold">SPOLINGO <span className="t-dim font-normal">// Nov 2025 - Present</span></p>
            <div className="mt-1 pl-4 border-l-2 border-[#3c3c3c]">
              <p>Building a new app focused on language learning</p>
              <p>through AI conversation practice.</p>
              <p className="mt-2">Built a custom ML model for real-time facial animation</p>
              <p>and photorealistic lip-sync, achieving audio-to-animation</p>
              <p>processing that rivals anything on the market.</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="t-yellow font-bold">WINGED <span className="t-dim font-normal">// Nov 2025 - Present</span></p>
            <div className="mt-1 pl-4 border-l-2 border-[#3c3c3c]">
              <p>Contracting at a friend&apos;s startup, building their iOS app.</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="t-yellow font-bold">BLOCKTICKETS <span className="t-dim font-normal">// Nov 2022 - Nov 2025</span></p>
            <div className="mt-1 pl-4 border-l-2 border-[#3c3c3c]">
              <p>Created an event creation flow inspired by and rivaling</p>
              <p>Ticketmaster&apos;s. Built multiple interactive seatmap systems</p>
              <p>for designers, organizers, and users.</p>
              <p className="mt-2">Developed a React Native app that has been in</p>
              <p>production for multiple years without issues.</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="t-yellow font-bold">SUPERNOVAS <span className="t-dim font-normal">// Aug 2021 - Aug 2022</span></p>
            <div className="mt-1 pl-4 border-l-2 border-[#3c3c3c]">
              <p>First &apos;real job&apos; as a developer. Joined a pre-seed startup</p>
              <p>in the social media / crypto space.</p>
              <p className="mt-2">Four months later we raised 200k and started</p>
              <p>hiring people to help with development.</p>
              <p className="mt-2 t-dim">Great learning experience, even when it ultimately</p>
              <p className="t-dim">ended in failure.</p>
            </div>
          </div>
        </div>

        <div>
          <p>
            <span className="t-green">valtteri@macbook</span>
            <span className="t-dim">:</span>
            <span className="t-blue">~</span>
            <span className="t-dim">$</span> <span className="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
