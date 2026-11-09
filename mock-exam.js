const quizData = [
    // ==========================================
    // MODULE 3.1: Communication (Questions 1 - 20)
    // ==========================================
    { id: 1, mod: "3.1: Communication", q: 'A regional director only forwards positive sales data to the CEO while intentionally hiding the declining numbers in a specific branch to make their region look better. What communication barrier is this?', opts: ['Filtering', 'Selective Perception', 'Information Overload', 'Short-circuiting'], a: 'Filtering' },
    { id: 2, mod: "3.1: Communication", q: 'You are in a meeting with Japanese executives. You notice they rarely speak directly about the contract terms, focusing instead on formal titles, pauses, and subtle body language. This is characteristic of what?', opts: ['Low-context culture', 'High-context culture', 'Cognitive dissonance', 'Information overload'], a: 'High-context culture' },
    { id: 3, mod: "3.1: Communication", q: 'An employee bypasses their direct supervisor and goes straight to the department head to request a vacation. What communication barrier occurred?', opts: ['Delay', 'Filtering', 'Short-circuiting', 'Lying'], a: 'Short-circuiting' },
    { id: 4, mod: "3.1: Communication", q: 'A manager sends an email outlining the exact steps needed to improve the team’s current subpar performance and clarifies what rewards they will get upon completion. Which function of communication is being utilized?', opts: ['Emotional Expression', 'Control', 'Information', 'Motivation'], a: 'Motivation' },
    { id: 5, mod: "3.1: Communication", q: 'During a presentation, the projector breaks, causing the audience to miss key parts of the message. In the communication model, the broken projector represents:', opts: ['Decoding', 'Noise', 'Channel', 'Feedback Loop'], a: 'Noise' },
    { id: 6, mod: "3.1: Communication", q: 'A factory floor worker suggests a new safety protocol to the plant manager. What direction of communication is this?', opts: ['Lateral', 'Downward', 'Upward', 'Horizontal'], a: 'Upward' },
    { id: 7, mod: "3.1: Communication", q: 'What is the primary disadvantage of oral communication when a message must pass through multiple levels of a corporate hierarchy?', opts: ['Lack of emotional content', 'High potential for distortion', 'Lack of immediate feedback', 'Inability to verify the sender'], a: 'High potential for distortion' },
    { id: 8, mod: "3.1: Communication", q: 'Which formal small-group network relies on one central figure to act as the conduit for all of the group’s communication, similar to a traditional manager-subordinate team?', opts: ['Chain', 'All-channel', 'Wheel', 'Grapevine'], a: 'Wheel' },
    { id: 9, mod: "3.1: Communication", q: 'Which of the following is true about the organizational grapevine?', opts: ['It is controlled by management', 'It is usually less believable than official company emails', 'It serves the self-interests of the people within it', 'It follows the formal chain of command'], a: 'It serves the self-interests of the people within it' },
    { id: 10, mod: "3.1: Communication", q: 'An HR manager receives 400 emails a day, causing her to miss an important grievance report. What communication barrier is she experiencing?', opts: ['Communication apprehension', 'Selective perception', 'Delay', 'Information overload'], a: 'Information overload' },
    { id: 11, mod: "3.1: Communication", q: 'A software engineer uses highly technical coding jargon when explaining a project delay to the marketing team, leaving them entirely confused. What barrier is present?', opts: ['Filtering', 'Language', 'Emotions', 'Selective Perception'], a: 'Language' },
    { id: 12, mod: "3.1: Communication", q: 'An employee is extremely anxious about speaking up in meetings and avoids sending written reports for fear of being judged. This is known as:', opts: ['Information Overload', 'Selective Perception', 'Communication Apprehension', 'Filtering'], a: 'Communication Apprehension' },
    { id: 13, mod: "3.1: Communication", q: 'According to research on gender differences in communication, which of the following is generally true?', opts: ['Men use talk to create connections, while women use it to emphasize status.', 'Women are more direct than men in conversation.', 'Women frequently apologize to express regret and restore balance to a conversation.', 'Men tend to be less boastful than women.'], a: 'Women frequently apologize to express regret and restore balance to a conversation.' },
    { id: 14, mod: "3.1: Communication", q: 'A coworker remains completely silent after you pitch an idea. According to communication theory, what should you assume?', opts: ['They are ignoring you', 'They agree with you', 'Silence can mean agreement, dissent, or contemplation', 'Silence always indicates anger'], a: 'Silence can mean agreement, dissent, or contemplation' },
    { id: 15, mod: "3.1: Communication", q: 'Using the term "visually impaired" instead of "blind" in an official company memo is an example of:', opts: ['High-context communication', 'Filtering', 'Politically correct communication', 'Short-circuiting'], a: 'Politically correct communication' },
    { id: 16, mod: "3.1: Communication", q: 'An executive reads a long report but only remembers the data that supports the decision she had already made, ignoring the negative risks. What barrier is this?', opts: ['Information overload', 'Selective perception', 'Filtering', 'Delay'], a: 'Selective perception' },
    { id: 17, mod: "3.1: Communication", q: 'If you are communicating with a business partner in a Low-Context culture (like North America), you should:', opts: ['Rely heavily on subtle situational cues', 'Understand that what is not said is more important than what is said', 'Rely essentially on words to convey meaning', 'Focus heavily on official status and reputation'], a: 'Rely essentially on words to convey meaning' },
    { id: 18, mod: "3.1: Communication", q: 'A manager uses the company’s formal guidelines and employee handbook to mandate a new dress code. Which function of communication is this?', opts: ['Motivation', 'Control', 'Emotional Expression', 'Information'], a: 'Control' },
    { id: 19, mod: "3.1: Communication", q: 'Translating a thought into a communication message using symbolic form (like writing a text message) is called:', opts: ['Decoding', 'Encoding', 'Channeling', 'Feedback'], a: 'Encoding' },
    { id: 20, mod: "3.1: Communication", q: 'In the communication process, what is the purpose of the feedback loop?', opts: ['To distort the message', 'To convert the message into symbols', 'To check against misunderstandings', 'To initiate the communication'], a: 'To check against misunderstandings' },

    // ==========================================
    // MODULE 3.2: Group Behavior (Questions 21 - 40)
    // ==========================================
    { id: 21, mod: "3.2: Group Behavior", q: 'A school committee is formed to plan a dance. During the second meeting, members are arguing aggressively about who should be the head chair and what the theme should be. Which stage of group development is this?', opts: ['Forming', 'Storming', 'Norming', 'Performing'], a: 'Storming' },
    { id: 22, mod: "3.2: Group Behavior", q: 'When working alone, Diego usually edits 10 videos a week. When placed in a group of 5, the group only produces 30 videos total. What concept explains this drop in individual effort?', opts: ['Social facilitation', 'Groupthink', 'Social loafing', 'Groupshift'], a: 'Social loafing' },
    { id: 23, mod: "3.2: Group Behavior", q: 'The committee agrees to host a bake sale, even though half the members secretly think a car wash would make more money, simply because they don\'t want to ruin the current peaceful vibe. What phenomenon is this?', opts: ['Social facilitation', 'Groupthink', 'Deviant workplace behavior', 'Role conflict'], a: 'Groupthink' },
    { id: 24, mod: "3.2: Group Behavior", q: 'The IT department is placed on the official organizational chart by top management. This makes them a:', opts: ['Command group', 'Task group', 'Interest group', 'Friendship group'], a: 'Command group' },
    { id: 25, mod: "3.2: Group Behavior", q: 'A group of employees from different departments meet every Friday to play basketball because they all enjoy the sport. This is an example of a(n):', opts: ['Task group', 'Command group', 'Interest group', 'Formal group'], a: 'Interest group' },
    { id: 26, mod: "3.2: Group Behavior", q: 'In the Punctuated-Equilibrium Model for temporary groups, what event triggers the group to drop old patterns, adopt new perspectives, and dramatically increase their progress?', opts: ['The first meeting', 'The midpoint of the deadline', 'The adjourning phase', 'The storming phase'], a: 'The midpoint of the deadline' },
    { id: 27, mod: "3.2: Group Behavior", q: 'A manager expects her employee to work late, but the employee’s coworkers expect him to leave at 5 PM so management doesn\'t raise the daily quota. The employee is experiencing:', opts: ['Role Perception', 'Role Identity', 'Role Conflict', 'Status Inequity'], a: 'Role Conflict' },
    { id: 28, mod: "3.2: Group Behavior", q: 'Which class of norms dictates things like how hard to work, what level of output to produce, and what level of tardiness is acceptable?', opts: ['Appearance norms', 'Performance norms', 'Social arrangement norms', 'Resource allocation norms'], a: 'Performance norms' },
    { id: 29, mod: "3.2: Group Behavior", q: 'An employee intentionally sabotages the factory equipment and steals office supplies. What category of deviant workplace behavior is this?', opts: ['Production', 'Political', 'Personal aggression', 'Property'], a: 'Property' },
    { id: 30, mod: "3.2: Group Behavior", q: 'How does high status affect an individual’s relationship with group norms?', opts: ['They are forced to conform more strictly than lower-status peers', 'They are better able to resist conformity pressures', 'They lose their status if they ever break a minor norm', 'They are completely immune from all group rules'], a: 'They are better able to resist conformity pressures' },
    { id: 31, mod: "3.2: Group Behavior", q: 'If a group’s goal is purely fact-finding and generating diverse inputs, what is the ideal group size?', opts: ['2-3 members', 'Around 7 members', 'Large groups (a dozen or more)', 'Exactly 5 members'], a: 'Large groups (a dozen or more)' },
    { id: 32, mod: "3.2: Group Behavior", q: 'A group has incredibly high cohesiveness, but their performance norms are very low (they value slacking off). What will happen to their productivity?', opts: ['High productivity', 'Moderate productivity', 'Low productivity', 'Moderate to low productivity'], a: 'Low productivity' },
    { id: 33, mod: "3.2: Group Behavior", q: 'According to the Social Facilitation Effect, how does the presence of others impact performance?', opts: ['It always improves performance', 'It always decreases performance', 'It improves performance on simple/routine tasks but hurts performance on complex tasks', 'It improves performance on complex tasks but hurts performance on simple tasks'], a: 'It improves performance on simple/routine tasks but hurts performance on complex tasks' },
    { id: 34, mod: "3.2: Group Behavior", q: 'During a risk assessment meeting, the team initially leans toward a slightly risky marketing campaign. After discussion, they decide to launch a wildly aggressive, highly risky campaign. This shift toward a more extreme position is called:', opts: ['Groupthink', 'Groupshift', 'Social loafing', 'Norming'], a: 'Groupshift' },
    { id: 35, mod: "3.2: Group Behavior", q: 'Which group decision-making technique completely prohibits criticism of any idea during the generation phase?', opts: ['Interacting groups', 'Brainstorming', 'Nominal group technique', 'Electronic meeting'], a: 'Brainstorming' },
    { id: 36, mod: "3.2: Group Behavior", q: 'In which decision-making technique do members physically sit together but operate entirely independently, silently writing down their ideas before sharing?', opts: ['Brainstorming', 'Nominal group technique', 'Interacting groups', 'Electronic meeting'], a: 'Nominal group technique' },
    { id: 37, mod: "3.2: Group Behavior", q: 'Individuals who hold a common demographic attribute, such as age or length of service in the organization, are referred to as:', opts: ['Cohorts', 'Deviants', 'Task groups', 'Status symbols'], a: 'Cohorts' },
    { id: 38, mod: "3.2: Group Behavior", q: 'A team has just formed. According to research, how long does it typically take for a culturally diverse/heterogeneous team to overcome their initial communication difficulties and perform at the same level as a homogeneous team?', opts: ['One week', 'About three months', 'One year', 'They never overcome it'], a: 'About three months' },
    { id: 39, mod: "3.2: Group Behavior", q: 'Which of the following is a known weakness of group decision making?', opts: ['They generate lower quality decisions than individuals', 'They decrease acceptance of the final solution', 'They suffer from ambiguous responsibility', 'They reduce the diversity of views'], a: 'They suffer from ambiguous responsibility' },
    { id: 40, mod: "3.2: Group Behavior", q: 'Which of the following is a strategy to INCREASE group cohesiveness?', opts: ['Make the group larger', 'Decrease the perceived difficulty of joining the group', 'Reward individual members rather than the group', 'Physically isolate the group'], a: 'Physically isolate the group' },

    // ==========================================
    // MODULE 3.3: Leadership (Questions 41 - 60)
    // ==========================================
    { id: 41, mod: "3.3: Leadership", q: 'A leader provides a clear vision for the future, instills pride, and communicates high expectations to their followers. According to contemporary theories, what type of leader is this?', opts: ['Transactional', 'Laissez-Faire', 'Transformational', 'Autocratic'], a: 'Transformational' },
    { id: 42, mod: "3.3: Leadership", q: 'According to Fiedler\'s Contingency Theory, what tool is used to determine if a leader\'s inherent style is task-oriented or relationship-oriented?', opts: ['Situational Leadership Curve', 'Least Preferred Co-worker (LPC) questionnaire', 'Managerial Grid', 'Path-Goal framework'], a: 'Least Preferred Co-worker (LPC) questionnaire' },
    { id: 43, mod: "3.3: Leadership", q: 'Your boss tells you exactly what tasks to do, sets strict deadlines, and monitors your performance closely, but rarely asks about your well-being. Using the Ohio State studies, this boss is:', opts: ['High in consideration', 'High in initiating structure', 'Low in initiating structure', 'A country club manager'], a: 'High in initiating structure' },
    { id: 44, mod: "3.3: Leadership", q: 'What is a fundamental difference between a manager and a leader?', opts: ['Managers inspire vision; leaders achieve results by directing activities', 'Management requires goal compatibility; leadership does not', 'Managers hold formal positions; anyone can use informal influence to act as a leader', 'Leadership is only focused on downward influence'], a: 'Managers hold formal positions; anyone can use informal influence to act as a leader' },
    { id: 45, mod: "3.3: Leadership", q: 'According to Trait Theory, why is "proneness to guilt" positively related to leadership effectiveness?', opts: ['It makes the leader easy to manipulate', 'It produces a strong sense of responsibility for others', 'It forces the leader to avoid taking risks', 'It ensures they follow formal regulations strictly'], a: 'It produces a strong sense of responsibility for others' },
    { id: 46, mod: "3.3: Leadership", q: 'In the Managerial Grid, a leader who scores a (9,9) shows high concern for production and high concern for people. This style is called:', opts: ['Country club management', 'Autocratic management', 'Team management', 'Impoverished management'], a: 'Team management' },
    { id: 47, mod: "3.3: Leadership", q: 'Fiedler’s Contingency Theory makes a very specific assumption about a person’s leadership style. What is it?', opts: ['A leader can easily adapt their style to any situation', 'A person’s leadership style is fixed and cannot be changed', 'Task-oriented leaders can be trained to become relationship-oriented', 'Style depends entirely on the followers\' readiness'], a: 'A person’s leadership style is fixed and cannot be changed' },
    { id: 48, mod: "3.3: Leadership", q: 'According to Hersey and Blanchard’s Situational Leadership Theory, if your followers are unable but willing to do a task, which leadership style should you use?', opts: ['Directing (Telling)', 'Selling', 'Participating', 'Delegating'], a: 'Selling' },
    { id: 49, mod: "3.3: Leadership", q: 'In Path-Goal Theory, which leader behavior involves consulting with followers and using their suggestions before making a decision?', opts: ['Directive', 'Supportive', 'Participative', 'Achievement-oriented'], a: 'Participative' },
    { id: 50, mod: "3.3: Leadership", q: 'According to Leader-Member Exchange (LMX) theory, what characterizes employees in the "out-group"?', opts: ['They receive disproportionate amounts of the leader’s attention', 'They are trusted with special projects', 'They only have formal relationships with the leader and face higher turnover', 'They share more administrative duties'], a: 'They only have formal relationships with the leader and face higher turnover' },
    { id: 51, mod: "3.3: Leadership", q: 'Using the Vroom & Yetton Leader-Participation model, if a leader discusses the problem with followers as a group, seeks their ideas through brainstorming, and accepts whatever decision the group makes, this style is:', opts: ['Autocratic Type 1 (AI)', 'Consultative Type 1 (CI)', 'Consultative Type 2 (CII)', 'Group-based Type 2 (GII)'], a: 'Group-based Type 2 (GII)' },
    { id: 52, mod: "3.3: Leadership", q: 'A charismatic leader who allows their personal goals to override the goals of the organization, utilizing their power for corrupt purposes, is demonstrating:', opts: ['Authentic leadership', 'The dark side of charismatic leadership', 'Servant leadership', 'Transactional leadership'], a: 'The dark side of charismatic leadership' },
    { id: 53, mod: "3.3: Leadership", q: 'A leader who watches and searches for deviations from rules and standards, and only steps in to take corrective action, is using:', opts: ['Transformational leadership', 'Management by Exception (active)', 'Idealized Influence', 'Intellectual Stimulation'], a: 'Management by Exception (active)' },
    { id: 54, mod: "3.3: Leadership", q: 'Which type of leader focuses heavily on the moral aspects of leadership, acts openly and candidly on their values, and models humility?', opts: ['Transactional leader', 'Authentic leader', 'Autocratic leader', 'Laissez-Faire leader'], a: 'Authentic leader' },
    { id: 55, mod: "3.3: Leadership", q: 'Which leadership style goes beyond self-interest and focuses primarily on opportunities to help followers grow and develop, often acting from the "back" of the group?', opts: ['Servant Leadership', 'Charismatic Leadership', 'Path-Goal Leadership', 'Task-oriented Leadership'], a: 'Servant Leadership' },
    { id: 56, mod: "3.3: Leadership", q: 'In certain environments, attributes like a highly cohesive work group or intrinsically satisfying tasks make formal leadership unnecessary. These factors are known as:', opts: ['Enhancers', 'Neutralizers', 'Substitutes for Leadership', 'Contingency variables'], a: 'Substitutes for Leadership' },
    { id: 57, mod: "3.3: Leadership", q: 'If an organization has highly inflexible work rules and rigid reward systems, a leader’s attempt to influence employees will be diminished. These factors act as:', opts: ['Enhancers', 'Substitutes', 'Neutralizers', 'Transformers'], a: 'Neutralizers' },
    { id: 58, mod: "3.3: Leadership", q: 'The theory that suggests leadership is merely an attribution people make about others—meaning that projecting the "appearance" of being smart and aggressive makes people view you as a leader—is:', 'opts': ['Attribution Theory of Leadership', 'Self-Leadership', 'Trait Theory', 'Behavioral Theory'], a: 'Attribution Theory of Leadership' },
    { id: 59, mod: "3.3: Leadership", q: 'A leader who actively works to unleash the potential of their subordinates and helps them become self-directed and self-motivated is known as a:', opts: ['Superleader', 'Autocratic leader', 'Transactional leader', 'Neutralizer'], a: 'Superleader' },
    { id: 60, mod: "3.3: Leadership", q: 'Which trait is characterized by a leader who is energetic, lively, sociable, assertive, and rarely silent?', opts: ['Integrity', 'Extraversion', 'Self-confidence', 'Drive'], a: 'Extraversion' },

    // ==========================================
    // MODULE 3.4: Power & Politics (Questions 61 - 80)
    // ==========================================
    { id: 61, mod: "3.4: Power & Politics", q: 'You need to convince your team to stay late. Instead of demanding it, you remind them of the company\'s core mission to "save lives" through your medical devices. Which power tactic are you using?', opts: ['Rational persuasion', 'Exchange', 'Inspirational appeals', 'Ingratiation'], a: 'Inspirational appeals' },
    { id: 62, mod: "3.4: Power & Politics", q: 'An employee constantly takes credit for the success of group projects to make themselves look better for a promotion. What impression management technique is this?', opts: ['Conformity', 'Excuses', 'Enhancement', 'Apologies'], a: 'Enhancement' },
    { id: 63, mod: "3.4: Power & Politics", q: 'A manager controls the schedule and can assign the worst weekend shifts to employees who disagree with them. What base of formal power is this?', opts: ['Coercive Power', 'Referent Power', 'Expert Power', 'Information Power'], a: 'Coercive Power' },
    { id: 64, mod: "3.4: Power & Politics", q: 'What is the most critical difference between leadership and power?', opts: ['Power requires goal compatibility; leadership does not', 'Leadership requires goal compatibility; power only requires dependence', 'Power focuses on downward influence; leadership focuses on lateral influence', 'Leadership is a capacity; power is an action'], a: 'Leadership requires goal compatibility; power only requires dependence' },
    { id: 65, mod: "3.4: Power & Politics", q: 'Which base of power comes strictly from an individual’s unique characteristics, such as their expertise or how much they are admired?', opts: ['Formal Power', 'Legitimate Power', 'Personal Power', 'Coercive Power'], a: 'Personal Power' },
    { id: 66, mod: "3.4: Power & Politics", q: 'An IT specialist is the only person in the entire company who knows how to fix the legacy payroll system. According to the dependency postulate, which factor gives him massive power?', opts: ['Scarcity', 'Non-substitutability', 'Legitimacy', 'Importance'], a: 'Non-substitutability' },
    { id: 67, mod: "3.4: Power & Politics", q: 'Relying on your authority position or pointing out that your request matches organizational policies is which power tactic?', opts: ['Consultation', 'Legitimacy', 'Pressure', 'Rational persuasion'], a: 'Legitimacy' },
    { id: 68, mod: "3.4: Power & Politics", q: 'Using flattery, praise, or overly friendly behavior prior to asking a coworker for a favor is known as:', opts: ['Exchange', 'Personal appeals', 'Ingratiation', 'Coalitions'], a: 'Ingratiation' },
    { id: 69, mod: "3.4: Power & Politics", q: 'Why can coworkers successfully sexually harass their peers even though they do not have formal legitimate power over them?', opts: ['Because they have coercive power', 'Because they can use their influence to withhold information, cooperation, and support', 'Because referent power overrides legitimate power', 'Because peers are exempt from HR policies'], a: 'Because they can use their influence to withhold information, cooperation, and support' },
    { id: 70, mod: "3.4: Power & Politics", q: 'An employee purposely sabotages a rival’s project and anonymously blows the whistle on a manager to get them fired. This is an example of:', opts: ['Legitimate political behavior', 'Impression management', 'Illegitimate political behavior', 'Rational persuasion'], a: 'Illegitimate political behavior' },
    { id: 71, mod: "3.4: Power & Politics", q: 'Doing more than you need to, such as arriving early and leaving late in an effort to show how dedicated and hardworking you are, is an Impression Management technique called:', opts: ['Conformity', 'Favors', 'Exemplification', 'Enhancement'], a: 'Exemplification' },
    { id: 72, mod: "3.4: Power & Politics", q: 'Which of the following organizational factors is most likely to stimulate severe political behavior?', opts: ['High trust among employees', 'Abundant resources', 'Zero-sum reward practices', 'Clear performance evaluation systems'], a: 'Zero-sum reward practices' },
    { id: 73, mod: "3.4: Power & Politics", q: 'Which of the following is a common negative employee response to high levels of organizational politics?', opts: ['Increased job satisfaction', 'Decreased anxiety', 'Increased turnover', 'Increased performance'], a: 'Increased turnover' },
    { id: 74, mod: "3.4: Power & Politics", q: 'When determining if a political action is ethical, what is the first question you must ask?', opts: ['Is the action fair and equitable?', 'Does it respect the rights of the individuals affected?', 'Is the action motivated by self-serving interest to the exclusion of the organization’s goals?', 'Will anyone find out?'], a: 'Is the action motivated by self-serving interest to the exclusion of the organization’s goals?' },
    { id: 75, mod: "3.4: Power & Politics", q: 'If someone labels a coworker’s behavior as "kissing up," how would a supporter of that same behavior label it positively?', opts: ['Demonstrating loyalty', 'Delegating authority', 'Planning ahead', 'Astute'], a: 'Demonstrating loyalty' },
    { id: 76, mod: "3.4: Power & Politics", q: 'You present logical arguments and factual evidence to prove to your boss that your request for a new software budget is reasonable. Which power tactic is this?', opts: ['Legitimacy', 'Rational persuasion', 'Consultation', 'Exchange'], a: 'Rational persuasion' },
    { id: 77, mod: "3.4: Power & Politics", q: 'Enlisting the aid or support of other department heads to persuade the CEO to agree with your proposal is an example of which tactic?', opts: ['Pressure', 'Coalitions', 'Personal appeals', 'Ingratiation'], a: 'Coalitions' },
    { id: 78, mod: "3.4: Power & Politics", q: 'Which base of personal power is driven by others’ identification with a person who has highly desirable personal traits (i.e., people follow them because they are admired)?', opts: ['Expert Power', 'Referent Power', 'Reward Power', 'Legitimate Power'], a: 'Referent Power' },
    { id: 79, mod: "3.4: Power & Politics", q: 'Admitting responsibility for an undesirable event and simultaneously seeking to get a pardon for the action is which Impression Management technique?', opts: ['Excuses', 'Apologies', 'Flattery', 'Conformity'], a: 'Apologies' },
    { id: 80, mod: "3.4: Power & Politics", q: 'Individual factors that make an employee more likely to engage in political behavior include having a high need for power, possessing an internal locus of control, and being a:', opts: ['Low self-monitor', 'High self-monitor', 'Low Machiavellian personality', 'Team player'], a: 'High self-monitor' },

    // ==========================================
    // MODULE 3.5: Conflict & Negotiation (Questions 81 - 100)
    // ==========================================
    { id: 81, mod: "3.5: Conflict & Negotiation", q: 'Management forces two arguing employees to stop fighting and dictates exactly how the project will be done, using their formal authority. Which conflict resolution technique is this?', opts: ['Problem solving', 'Smoothing', 'Authoritative command', 'Altering structural variables'], a: 'Authoritative command' },
    { id: 82, mod: "3.5: Conflict & Negotiation", q: 'In a union negotiation, the workers want a $5 raise, and management wants to give $1. They agree to split the difference at $3. This is an example of:', opts: ['Integrative bargaining', 'Distributive bargaining', 'Avoidance', 'Superordinate goals'], a: 'Distributive bargaining' },
    { id: 83, mod: "3.5: Conflict & Negotiation", q: 'A trusted third party is brought into a negotiation to provide an informal communication link between the two sides, but cannot dictate the agreement. This person is a:', opts: ['Mediator', 'Arbitrator', 'Conciliator', 'Consultant'], a: 'Conciliator' },
    { id: 84, mod: "3.5: Conflict & Negotiation", q: 'Which view of conflict encourages conflict on the grounds that a peaceful, tranquil group is prone to becoming static, apathetic, and unresponsive to innovation?', opts: ['Traditional View', 'Human Relations View', 'Interactionist View', 'Resolution-focused View'], a: 'Interactionist View' },
    { id: 85, mod: "3.5: Conflict & Negotiation", q: 'Two members of an advertising team are arguing over the actual content and goals of their new campaign. What type of conflict is this, and is it generally functional or dysfunctional?', opts: ['Relationship conflict; Dysfunctional', 'Task conflict; Functional at low-to-moderate levels', 'Process conflict; Dysfunctional', 'Task conflict; Always dysfunctional'], a: 'Task conflict; Functional at low-to-moderate levels' },
    { id: 86, mod: "3.5: Conflict & Negotiation", q: 'A manager attempts to solve a dispute between two departments by clarifying differences and finding a creative win-win solution where both departments\' goals are fully achieved. What is this conflict-handling intention?', opts: ['Competing', 'Collaborating', 'Avoiding', 'Compromising'], a: 'Collaborating' },
    { id: 87, mod: "3.5: Conflict & Negotiation", q: 'Which conflict-handling intention is characterized by being completely unassertive and highly cooperative (willing to sacrifice your own goals for the other person)?', opts: ['Competing', 'Accommodating', 'Avoiding', 'Compromising'], a: 'Accommodating' },
    { id: 88, mod: "3.5: Conflict & Negotiation", q: 'To resolve a bitter dispute over budget cuts, the CEO gives the two warring departments a massive shared project that they can only finish if they completely cooperate. What resolution technique is this?', opts: ['Superordinate goals', 'Expansion of resources', 'Smoothing', 'Altering structural variables'], a: 'Superordinate goals' },
    { id: 89, mod: "3.5: Conflict & Negotiation", q: 'A manager changes the formal organizational structure and redesigns jobs to physically separate two employees who constantly fight. This resolution technique is:', opts: ['Altering the human variable', 'Authoritative command', 'Altering the structural variables', 'Problem solving'], a: 'Altering the structural variables' },
    { id: 90, mod: "3.5: Conflict & Negotiation", q: 'To prevent Groupthink, a manager deliberately appoints an employee to purposely argue against the majority position. What conflict stimulation technique is this?', opts: ['Communication', 'Bringing in outsiders', 'Restructuring the organization', 'Appointing a devil\'s advocate'], a: 'Appointing a devil\'s advocate' },
    { id: 91, mod: "3.5: Conflict & Negotiation", q: 'In preparation for a negotiation, you determine the absolute lowest value acceptable to you before you will walk away from the deal. What is this called?', opts: ['Target point', 'Resistance point', 'BATNA', 'Settlement range'], a: 'BATNA' },
    { id: 92, mod: "3.5: Conflict & Negotiation", q: 'What is the primary motivation in Integrative Bargaining?', opts: ['Get as much of the fixed pie as possible', 'Win-lose', 'Expand the pie so that both parties are satisfied (Win-win)', 'Information hiding'], a: 'Expand the pie so that both parties are satisfied (Win-win)' },
    { id: 93, mod: "3.5: Conflict & Negotiation", q: 'A third party is brought into a stalled labor negotiation. This person has the formal legal authority to dictate an agreement and force a settlement. This person is an:', opts: ['Arbitrator', 'Mediator', 'Conciliator', 'Consultant'], a: 'Arbitrator' },
    { id: 94, mod: "3.5: Conflict & Negotiation", q: 'Playing down differences while heavily emphasizing common interests between conflicting parties is a conflict resolution technique called:', opts: ['Smoothing', 'Avoidance', 'Problem solving', 'Expansion of resources'], a: 'Smoothing' },
    { id: 95, mod: "3.5: Conflict & Negotiation", q: 'In Distributive Bargaining, information sharing is typically:', opts: ['High, because it helps find ways to satisfy both interests', 'Low, because sharing information allows the other party to take advantage', 'Mandatory by law', 'Focused on long-term relationship building'], a: 'Low, because sharing information allows the other party to take advantage' },
    { id: 96, mod: "3.5: Conflict & Negotiation", q: 'Which view of conflict simply assumed that all conflict was bad and caused by poor communication or lack of trust?', opts: ['Human Relations View', 'Interactionist View', 'Traditional View', 'Resolution-focused View'], a: 'Traditional View' },
    { id: 97, mod: "3.5: Conflict & Negotiation", q: 'When each party in a conflict gives up something of value to reach an agreement, this intention is called:', opts: ['Collaborating', 'Accommodating', 'Compromising', 'Competing'], a: 'Compromising' },
    { id: 98, mod: "3.5: Conflict & Negotiation", q: 'Adding employees to a group whose backgrounds and values differ dramatically from present members in order to shake things up is a technique for:', opts: ['Conflict Resolution', 'Conflict Stimulation', 'Distributive Bargaining', 'Integrative Bargaining'], a: 'Conflict Stimulation' },
    { id: 99, mod: "3.5: Conflict & Negotiation", q: 'A neutral third party who facilitates a negotiated solution solely by using reasoning, persuasion, and suggesting alternatives (but cannot force an agreement) is a:', opts: ['Mediator', 'Arbitrator', 'Conciliator', 'Dictator'], a: 'Mediator' },
    { id: 100, mod: "3.5: Conflict & Negotiation", q: 'Which type of conflict focuses strictly on interpersonal incompatibilities and is almost always dysfunctional?', opts: ['Task conflict', 'Process conflict', 'Relationship conflict', 'Structural conflict'], a: 'Relationship conflict' },

    // ==========================================
    // MODULE 3.6: Work Teams (Questions 101 - 120)
    // ==========================================
    { id: 101, mod: "3.6: Work Teams", q: 'A group of employees from Marketing, IT, and Finance are brought together to launch a new app. This is an example of what type of team?', opts: ['Self-managed work team', 'Problem-solving team', 'Cross-functional team', 'Virtual team'], a: 'Cross-functional team' },
    { id: 102, mod: "3.6: Work Teams", q: 'To ensure your team is effective, you give them the freedom and independence to schedule their own work and determine their own procedures. This work design component is called:', opts: ['Task identity', 'Skill variety', 'Autonomy', 'Task significance'], a: 'Autonomy' },
    { id: 103, mod: "3.6: Work Teams", q: 'According to team composition research, what is the most effective team size to avoid social loafing and maintain mutual accountability?', opts: ['2 to 4 members', '5 to 9 members', '10 to 15 members', '15+ members'], a: '5 to 9 members' },
    { id: 104, mod: "3.6: Work Teams", q: 'What is the primary difference between a work group and a work team regarding synergy?', opts: ['Work groups create positive synergy; work teams create negative synergy', 'Work groups have neutral synergy; work teams generate positive synergy', 'Work groups share mutual accountability; work teams do not', 'There is no difference in synergy'], a: 'Work groups have neutral synergy; work teams generate positive synergy' },
    { id: 105, mod: "3.6: Work Teams", q: 'Employees who perform highly related jobs take on the planning and scheduling responsibilities of their former supervisors. What type of team is this?', opts: ['Cross-functional team', 'Problem-solving team', 'Self-managed work team', 'Virtual team'], a: 'Self-managed work team' },
    { id: 106, mod: "3.6: Work Teams", q: 'A team communicates entirely through videoconferencing and email to achieve a goal because they live in different countries. This is a:', opts: ['Cross-functional team', 'Virtual team', 'Self-managed team', 'Problem-solving team'], a: 'Virtual team' },
    { id: 107, mod: "3.6: Work Teams", q: 'In the Work Design component of effective teams, what is "Task Identity"?', opts: ['The degree to which the job requires different activities and talents', 'The amount of impact the work has on other people', 'The degree to which the job provides independence', 'The degree to which the job requires completion of a whole and identifiable piece of work'], a: 'The degree to which the job requires completion of a whole and identifiable piece of work' },
    { id: 108, mod: "3.6: Work Teams", q: 'In the Work Design component, if an employee perceives that their work has a substantial, real-world impact on the lives of others (like building medical devices), this job has high:', opts: ['Task identity', 'Autonomy', 'Task significance', 'Skill variety'], a: 'Task significance' },
    { id: 109, mod: "3.6: Work Teams", q: 'When staffing a team (Composition), what is true about high-ability teams?', opts: ['They rely entirely on the weakest link', 'They are less adaptable to changing situations', 'They do better when workload is distributed evenly so performance doesn\'t depend on the weakest link', 'They usually fail because of too many dominant personalities'], a: 'They do better when workload is distributed evenly so performance doesn\'t depend on the weakest link' },
    { id: 110, mod: "3.6: Work Teams", q: 'Culturally heterogeneous (diverse) teams generally face what challenge?', opts: ['They lack diverse viewpoints', 'They have more difficulty learning to work with each other and solving problems initially', 'They are less creative than homogeneous teams', 'They never reach the performing stage'], a: 'They have more difficulty learning to work with each other and solving problems initially' },
    { id: 111, mod: "3.6: Work Teams", q: 'To create an effective context for a team, management must provide adequate resources. Which of the following is considered an adequate resource?', opts: ['Timely information and proper equipment', 'Micromanagement', 'Ambiguous goals', 'Strict negative reinforcement'], a: 'Timely information and proper equipment' },
    { id: 112, mod: "3.6: Work Teams", q: 'Why is a "climate of trust" critical in the context of an effective team?', opts: ['It allows members to completely ignore each other', 'It facilitates cooperation and bonds members around the belief that others won\'t take advantage of them', 'It increases social loafing', 'It eliminates all task conflict'], a: 'It facilitates cooperation and bonds members around the belief that others won\'t take advantage of them' },
    { id: 113, mod: "3.6: Work Teams", q: 'How should an organization modify its performance evaluation and reward system to support work teams?', opts: ['Base rewards entirely on individual performance', 'Focus on hybrid systems that recognize individual contributions AND reward the entire group for positive outcomes', 'Eliminate all performance evaluations', 'Only reward the team leader'], a: 'Focus on hybrid systems that recognize individual contributions AND reward the entire group for positive outcomes' },
    { id: 114, mod: "3.6: Work Teams", q: 'Effective teams translate their common purpose into specific, measurable, and realistic performance goals. This is part of which team effectiveness category?', opts: ['Process', 'Context', 'Work Design', 'Composition'], a: 'Process' },
    { id: 115, mod: "3.6: Work Teams", q: 'When an effective team genuinely has confidence in themselves and believes they can succeed, they possess high:', opts: ['Task identity', 'Team efficacy', 'Social loafing', 'Groupthink'], a: 'Team efficacy' },
    { id: 116, mod: "3.6: Work Teams", q: 'How do effective teams prevent social loafing?', opts: ['By making members individually and jointly accountable for the team’s purpose, goals, and approach', 'By increasing the team size to 20 people', 'By removing all performance metrics', 'By relying on one strong leader to do all the work'], a: 'By making members individually and jointly accountable for the team’s purpose, goals, and approach' },
    { id: 117, mod: "3.6: Work Teams", q: 'Which of the following is a major cultural challenge when introducing teams into a U.S. organization?', opts: ['The national culture is highly collective', 'The national culture is highly individualistic and historically values individual achievement', 'There are no challenges to introducing teams in the U.S.', 'U.S. workers prefer low autonomy'], a: 'The national culture is highly individualistic and historically values individual achievement' },
    { id: 118, mod: "3.6: Work Teams", q: 'What is the essence of Teams and Quality Management (QM)?', opts: ['Process improvement heavily reliant on employee involvement', 'Top-down authoritative command', 'Replacing humans with automation', 'Eliminating all task conflict'], a: 'Process improvement heavily reliant on employee involvement' },
    { id: 119, mod: "3.6: Work Teams", q: 'What is a major risk for mature, highly successful teams?', opts: ['They become too diverse', 'Success can lead to complacency and less openness to novel ideas', 'They lose all their skills', 'They revert to the storming stage permanently'], a: 'Success can lead to complacency and less openness to novel ideas' },
    { id: 120, mod: "3.6: Work Teams", q: 'A group of employees from the same department meet for a few hours each week to discuss ways of improving quality, efficiency, and the work environment. What type of team are they?', opts: ['Problem-solving team', 'Cross-functional team', 'Virtual team', 'Self-managed team'], a: 'Problem-solving team' }
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results-container');
    const submitBtn = document.getElementById('submit-btn');

    // Group questions by module
    const modules = {};
    quizData.forEach(q => {
        if (!modules[q.mod]) {
            modules[q.mod] = [];
        }
        modules[q.mod].push(q);
    });

    // 1. Render the questions into the DOM, grouped by module
    Object.keys(modules).forEach((modName) => {
        // Create Module Header
        const modHeader = document.createElement('h2');
        modHeader.style.marginTop = '40px';
        modHeader.style.backgroundColor = 'var(--primary)';
        modHeader.style.color = 'white';
        modHeader.style.padding = '10px';
        modHeader.style.borderRadius = '5px';
        modHeader.textContent = modName;
        form.insertBefore(modHeader, submitBtn);

        // Render questions for this module
        modules[modName].forEach((q, idx) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'card question-block';

            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            // Adjusted numbering to match the array index globally, or you could do index within module. Doing global ID for consistency.
            questionText.textContent = `${q.id}. ${q.q}`;
            questionBlock.appendChild(questionText);

            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'options-grid';

            q.opts.forEach(opt => {
                const label = document.createElement('label');
                label.className = 'option-label';

                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q-${q.id}`;
                input.value = opt;
                // Removed required=true so you don't have to answer everything to view answers
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + opt));
                optionsGrid.appendChild(label);
            });

            questionBlock.appendChild(optionsGrid);

            // Create "View Answer" Button
            const viewAnswerBtn = document.createElement('button');
            viewAnswerBtn.type = 'button';
            viewAnswerBtn.className = 'btn';
            viewAnswerBtn.style.marginTop = '15px';
            viewAnswerBtn.style.backgroundColor = '#2c3e50';
            viewAnswerBtn.style.color = 'white';
            viewAnswerBtn.textContent = 'View Answer';
            
            // Container to hold the revealed answer
            const answerRevealContainer = document.createElement('div');
            answerRevealContainer.style.marginTop = '10px';
            answerRevealContainer.style.display = 'none';

            viewAnswerBtn.addEventListener('click', () => {
                const selectedInput = document.querySelector(`input[name="q-${q.id}"]:checked`);
                const userAnswer = selectedInput ? selectedInput.value : 'No answer selected';
                const isCorrect = userAnswer === q.a;

                let revealHTML = `
                    <div style="padding: 10px; border-radius: 5px; background: #f9f9f9; border-left: 5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                        <p style="margin: 0 0 5px 0;">Your Answer: <span style="font-weight: bold; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">${userAnswer} ${isCorrect ? '✔' : '✘'}</span></p>
                        ${!isCorrect ? `<p style="margin: 0; font-weight: bold; color: var(--success); background: #e8f5e9; padding: 5px; border-radius: 3px;">Correct Answer: ${q.a}</p>` : ''}
                    </div>
                `;
                
                answerRevealContainer.innerHTML = revealHTML;
                answerRevealContainer.style.display = 'block';
                viewAnswerBtn.style.display = 'none'; // Hide button after clicking
            });

            questionBlock.appendChild(viewAnswerBtn);
            questionBlock.appendChild(answerRevealContainer);

            // Insert before the submit button
            form.insertBefore(questionBlock, submitBtn);
        });
    });

    // 2. Handle form submission (Final Grading)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Gather answers
        const formData = new FormData(form);
        const answers = {};
        for (let [key, value] of formData.entries()) {
            answers[key] = value;
        }

        // Calculate Scores
        const moduleScores = {};
        quizData.forEach(q => {
            if (!moduleScores[q.mod]) moduleScores[q.mod] = { correct: 0, total: 0 };
            moduleScores[q.mod].total++;
            
            if (answers[`q-${q.id}`] === q.a) {
                moduleScores[q.mod].correct++;
            }
        });

        const totalCorrect = Object.values(moduleScores).reduce((sum, mod) => sum + mod.correct, 0);

        // Build Results HTML
        let resultsHTML = `
            <div class="card">
                <h2 style="text-align: center; font-size: 2rem;">Final Score: ${totalCorrect} / ${quizData.length}</h2>
                <h3>Score Breakdown by Module:</h3>
        `;

        for (const [mod, data] of Object.entries(moduleScores)) {
            resultsHTML += `
                <div class="module-score">
                    <span>${mod}</span>
                    <span>${data.correct} / ${data.total}</span>
                </div>
            `;
        }

        resultsHTML += `<button type="button" id="retake-btn" class="btn submit-btn" style="background-color: #2c3e50; color: white;">Retake Exam</button></div>`;
        resultsHTML += `<h3>Detailed Question Review:</h3>`;

        // Group results review by module as well
        Object.keys(modules).forEach((modName) => {
            resultsHTML += `<h3 style="margin-top: 30px; border-bottom: 2px solid var(--primary);">${modName}</h3>`;
            modules[modName].forEach(q => {
                const userAnswer = answers[`q-${q.id}`];
                const isCorrect = userAnswer === q.a;
                
                resultsHTML += `
                    <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
                        <p><strong>${q.id}. ${q.q}</strong></p>
                        <p>Your Answer: <span class="${isCorrect ? 'correct-text' : 'incorrect-text'}">${userAnswer || "No answer"} ${isCorrect ? '✔' : '✘'}</span></p>
                        ${!isCorrect ? `<div class="real-answer">Correct Answer: ${q.a}</div>` : ''}
                    </div>
                `;
            });
        });

        resultsContainer.innerHTML = resultsHTML;

        // Attach event listener for the retake button
        document.getElementById('retake-btn').addEventListener('click', () => {
            form.reset();
            
            // Reset all inline "View Answer" buttons and hide reveals
            document.querySelectorAll('.btn[type="button"]').forEach(btn => {
                if (btn.textContent === 'View Answer') {
                    btn.style.display = 'inline-block';
                    btn.nextElementSibling.style.display = 'none';
                    btn.nextElementSibling.innerHTML = '';
                }
            });

            resultsContainer.style.display = 'none';
            form.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Toggle views
        form.style.display = 'none';
        resultsContainer.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});