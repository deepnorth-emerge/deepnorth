import { useState } from 'react';

const exercises = [
  {
    id: 'sort',
    title: 'Exercise 1: The Sort',
    prompt: '"Technology is making us less human."',
    instruction: "What\u2019s your first response \u2014 agree or disagree?",
    options: ['Agree', 'Disagree'],
    reflection: (choice) => ({
      heading: 'Notice what just happened.',
      body: `You chose "${choice}."

The moment you did — the binary processor fired. The statement was designed to trigger the sort. Friend or foe. Right or wrong. With us or against us.

Notice the pull to pick a side. That pull is the operating system.

The statement isn't wrong or right. It's a lens. But the first thing the mind did was slot it.

That's the default. Thousands of times a day. Usually without noticing.`,
    }),
  },
  {
    id: 'hold',
    title: 'Exercise 2: The Hold',
    prompt: '"The thing that keeps you safe is the thing that keeps you stuck."',
    instruction: `Don't sort this one. Hold both sides at once — the safety and the stuckness — without resolving it into one or the other.

Stay with the tension for a moment.`,
    options: ['I held it', "I felt the pull to resolve it"],
    reflection: (choice) => ({
      heading: choice === 'I held it' ? 'Something opened.' : 'That pull is data.',
      body: choice === 'I held it'
        ? `That quality of holding — where you don't collapse the tension into a position — is a different cognitive operation than sorting.

It's not comfortable. It doesn't produce a decision. It produces something else: a sense of the whole shape of a thing, rather than the half you chose.

Notice what it felt like. That feeling is important.`
        : `The discomfort — the restlessness when you can't sort something into a category — is the binary processor looking for a box that isn't there.

It's not a failure of thinking. It's the operating system running correctly, trying to do what it was designed to do.

The question is: what's available if you don't let it close the loop?`,
    }),
  },
  {
    id: 'field',
    title: 'Exercise 3: The Field',
    prompt: `A team leader has been praised for years for her direct, decisive style.
A new team member — skilled, experienced — keeps going quiet in meetings.
The leader sees a performance problem.
The team member sees a culture problem.
Their manager sees a personality clash.`,
    instruction: 'Instead of deciding who is right — can you hold all three perspectives at once, as if you were looking at a landscape rather than picking a peak?',
    options: ['I felt the field', 'I kept trying to decide'],
    reflection: (choice) => ({
      heading: choice === 'I felt the field' ? "That\u2019s relational intelligence." : "The sorting instinct is strong here.",
      body: choice === 'I felt the field'
        ? `What you just accessed — holding multiple valid perspectives without collapsing them — is the cognitive mode binary can't produce.

It doesn't mean all perspectives are equally correct. It means you can see the shape of the situation before deciding how to act in it.

That's what changes leadership. Not better decisions — better seeing.`
        : `The pull to resolve — to find out who's right — is the binary operating system doing exactly what it was designed to do.

But in a relational field, there often isn't one right. There's a pattern. And the pattern is only visible when you stop trying to pick a winner.

What would the situation look like if you were watching it rather than judging it?`,
    }),
  },
  {
    id: 'recognition',
    title: 'Exercise 4: The Recognition',
    prompt: "Think of a moment when you knew something \u2014 not because you\u2019d reasoned your way to it, but because you simply knew.",
    instruction: `A decision that turned out to be exactly right, with no obvious evidence at the time.
A conversation where something shifted and you couldn't explain why.
A moment of holding complexity without it collapsing.

Most people have at least one.`,
    options: ["Yes — I have a moment like that", "I'm not sure"],
    reflection: (choice) => ({
      heading: choice === "Yes — I have a moment like that" ? 'Name it.' : 'It may be quieter than you expect.',
      body: choice === "Yes — I have a moment like that"
        ? `Whatever that moment was — that was Fullmind.

Not mystical. Not rare. Not the result of special training. Just the complete cognitive suite coming online, briefly, in circumstances that allowed it.

The question isn't whether you can access it. You already have.

The question is whether you've noticed what's been doing the sorting — and whether you want to.`
        : `These moments often get dismissed as luck, intuition, or coincidence. The binary processor prefers explanations it can verify.

But they're there. The quiet knowing. The sense of a whole before the parts are assembled. The certainty without reason.

The question isn't whether you have them. The question is whether you've had permission to take them seriously.`,
    }),
  },
];

const closing = `You just experienced four different cognitive operations.

The first — sorting — is what your brain does thousands of times a day. It's your default operating system.

The others are available too. They always have been.

The question isn't whether you can access them.
The question is whether you've noticed what's been doing the sorting.`;

export default function PerspectiveEngine() {
  const [step, setStep] = useState('intro'); // 'intro' | 0 | 1 | 2 | 3 | 'closing'
  const [choices, setChoices] = useState({});
  const [reflectionFor, setReflectionFor] = useState(null);

  const currentExercise = typeof step === 'number' ? exercises[step] : null;
  const currentChoice = currentExercise ? choices[currentExercise.id] : null;
  const isReflecting = reflectionFor !== null && typeof step === 'number';

  const handleChoice = (option) => {
    const ex = exercises[step];
    setChoices(prev => ({ ...prev, [ex.id]: option }));
    setReflectionFor(option);
  };

  const handleNext = () => {
    setReflectionFor(null);
    if (typeof step === 'number') {
      if (step < exercises.length - 1) {
        setStep(step + 1);
      } else {
        setStep('closing');
      }
    }
  };

  const handleBegin = () => setStep(0);
  const handleReset = () => {
    setStep('intro');
    setChoices({});
    setReflectionFor(null);
  };

  const baseStyle = {
    fontFamily: "'Inter', system-ui, sans-serif",
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0',
    color: '#1A1A1A',
  };

  const headingStyle = {
    fontFamily: "'Source Serif 4', Georgia, serif",
    lineHeight: '1.25',
    color: '#1A1A1A',
  };

  if (step === 'intro') {
    return (
      <div style={baseStyle}>
        <div style={{ textAlign: 'center', padding: '2rem 0 3rem' }}>
          <p style={{ ...headingStyle, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
            Don't read about the pattern.<br />Notice it.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#555', marginBottom: '0.75rem' }}>
            This takes about five minutes.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#555', marginBottom: '3rem' }}>
            It works best if you're willing to be surprised.
          </p>
          <button
            onClick={handleBegin}
            style={{
              backgroundColor: '#2A7F6F',
              color: '#fff',
              border: 'none',
              padding: '0.85rem 2.25rem',
              borderRadius: '3px',
              fontSize: '0.95rem',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#1E5E52'}
            onMouseLeave={e => e.target.style.backgroundColor = '#2A7F6F'}
          >
            Begin
          </button>
        </div>
      </div>
    );
  }

  if (step === 'closing') {
    return (
      <div style={baseStyle}>
        <div style={{ padding: '2rem 0 3rem' }}>
          <p style={{ ...headingStyle, fontSize: '1.1rem', fontWeight: 600, marginBottom: '2rem' }}>
            Four exercises. Four cognitive operations.
          </p>
          {closing.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '1rem', lineHeight: '1.8', color: i === 0 ? '#1A1A1A' : (i >= 3 ? '#1A1A1A' : '#333'), marginBottom: '1.25rem', fontStyle: i >= 3 ? 'italic' : 'normal' }}>
              {para}
            </p>
          ))}

          <div style={{ borderTop: '1px solid #D4CFC5', paddingTop: '2.5rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 0.5rem' }}>Where to go from here:</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/the-work"
                style={{ backgroundColor: '#2A7F6F', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '3px', fontSize: '0.88rem', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}
              >
                Read the framework
              </a>
              <a
                href="https://deepnorth.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: 'transparent', color: '#2A7F6F', padding: '0.68rem 1.48rem', borderRadius: '3px', fontSize: '0.88rem', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, textDecoration: 'none', border: '1.5px solid #2A7F6F', display: 'inline-block' }}
              >
                Subscribe on Substack
              </a>
              <a
                href="/contact"
                style={{ backgroundColor: 'transparent', color: '#2A7F6F', padding: '0.68rem 1.48rem', borderRadius: '3px', fontSize: '0.88rem', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, textDecoration: 'none', border: '1.5px solid #2A7F6F', display: 'inline-block' }}
              >
                Get in touch
              </a>
            </div>
          </div>

          <button
            onClick={handleReset}
            style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.82rem', cursor: 'pointer', marginTop: '2rem', padding: 0, fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Start again
          </button>
        </div>
      </div>
    );
  }

  const ex = exercises[step];
  const reflection = isReflecting ? ex.reflection(reflectionFor) : null;

  return (
    <div style={baseStyle}>
      <div style={{ padding: '1rem 0 3rem' }}>

        {/* Step indicator */}
        <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2A7F6F', marginBottom: '1.75rem' }}>
          {ex.title}
        </p>

        {/* Prompt */}
        <blockquote style={{
          ...headingStyle,
          fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          borderLeft: '3px solid #D4CFC5',
          paddingLeft: '1.25rem',
          marginLeft: 0,
          marginRight: 0,
          marginBottom: '2rem',
          color: '#1A1A1A',
        }}>
          {ex.prompt.split('\n').map((line, i) => (
            <span key={i}>{line}{i < ex.prompt.split('\n').length - 1 && <br />}</span>
          ))}
        </blockquote>

        {/* Instruction */}
        <div style={{ marginBottom: '2.5rem' }}>
          {ex.instruction.split('\n').map((line, i) => (
            <p key={i} style={{ fontSize: '0.95rem', lineHeight: '1.75', color: '#444', margin: '0 0 0.5rem' }}>
              {line}
            </p>
          ))}
        </div>

        {/* Options (only before choice) */}
        {!isReflecting && (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {ex.options.map(option => (
              <button
                key={option}
                onClick={() => handleChoice(option)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#2A7F6F',
                  border: '1.5px solid #2A7F6F',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '3px',
                  fontSize: '0.9rem',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.target.style.backgroundColor = '#2A7F6F'; e.target.style.color = '#fff'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2A7F6F'; }}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Reflection */}
        {isReflecting && reflection && (
          <div style={{
            backgroundColor: '#F0EDE6',
            padding: '2rem',
            borderRadius: '3px',
            marginBottom: '2rem',
          }}>
            <p style={{ ...headingStyle, fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              {reflection.heading}
            </p>
            {reflection.body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: '0.93rem', lineHeight: '1.8', color: '#333', marginBottom: i < reflection.body.split('\n\n').length - 1 ? '1rem' : 0 }}>
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Next button */}
        {isReflecting && (
          <button
            onClick={handleNext}
            style={{
              backgroundColor: '#2A7F6F',
              color: '#fff',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '3px',
              fontSize: '0.9rem',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#1E5E52'}
            onMouseLeave={e => e.target.style.backgroundColor = '#2A7F6F'}
          >
            {step < exercises.length - 1 ? 'Continue' : 'See what emerged'}
          </button>
        )}

      </div>
    </div>
  );
}
