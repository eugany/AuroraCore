import type { CollectionEntry } from 'astro:content';
import type { SupportedLang } from '../utils/i18n';

type LocalizedPost = {
  title: string;
  paragraphs: string[];
};

const DEVLOG_I18N: Record<string, Partial<Record<SupportedLang, LocalizedPost>>> = {
  'day-30-tooling-war-final': {
    en: {
      title: 'Final Battle with Tools',
      paragraphs: [
        'I did not even get to test OpenCode, because the core stack was already integrated into one app: code and file editing, DB browsing, terminal control, and LLM access.',
        'At this point the workflow runs with dozens of managed terminals and action controls, so external tool switching became unnecessary.',
      ],
    },
    cn: {
      title: '与工具战争的终章',
      paragraphs: [
        'OpenCode 甚至没来得及认真测试，因为核心能力已经在一个系统里完成整合: 代码文件编辑、数据库查看、终端管理与 LLM 接入。',
        '现在可以同时控制大量终端和执行动作，工作流不再依赖频繁切换外部工具。',
      ],
    },
    jp: {
      title: 'ツール戦争の最終局面',
      paragraphs: [
        'OpenCodeを試す前に、必要な機能を自前アプリに統合した。コード編集、DB閲覧、ターミナル制御、LLM接続まで一体化。',
        '多数ターミナルを一元管理できるため、外部ツールへの依存はほぼ消えた。',
      ],
    },
  },
  'day-28-browser-as-syscall': {
    en: {
      title: 'Browser as a Syscall',
      paragraphs: [
        'A tabbed browser was embedded directly into Mission Control as an execution primitive, not just for browsing.',
        'The goal is long-running 24/7 agent work without cloud runtime limits; testing was performed on a 144-core host.',
      ],
    },
    cn: {
      title: '把浏览器当作系统调用',
      paragraphs: [
        '在 Mission Control 中直接加入多标签浏览器，把它当成执行原语，而不是普通浏览工具。',
        '目标是让代理 24/7 持续运行，规避云端执行时长限制；测试环境使用了 144 核服务器。',
      ],
    },
    jp: {
      title: 'ブラウザを syscall 化する',
      paragraphs: [
        'Mission Control にタブ付きブラウザを統合し、単なる閲覧ではなく実行プリミティブとして扱う方針を取った。',
        '狙いはクラウド実行時間の制約を避け、エージェントを24/7で動かすこと。検証には144コア環境を使用。',
      ],
    },
  },
  'day-27-yolo-access': {
    en: {
      title: 'YOLO Mode and Access Rights',
      paragraphs: [
        'Core CLI operation shifted to unrestricted execution modes (`codex --yolo`, `claude --dangerously-skip-permissions`) for maximum speed.',
        'Permission boundaries are enforced by project rules and protocol files instead of interactive confirmations.',
      ],
    },
    cn: {
      title: 'YOLO 模式与权限策略',
      paragraphs: [
        '核心 CLI 工作流转向无阻塞执行模式（`codex --yolo`、`claude --dangerously-skip-permissions`）以提升速度。',
        '权限边界不靠交互确认，而由项目规则与协议文件统一约束。',
      ],
    },
    jp: {
      title: 'YOLOモードとアクセス制御',
      paragraphs: [
        '高速化のため、CLI運用を無停止モード（`codex --yolo` / `claude --dangerously-skip-permissions`）へ寄せた。',
        '承認ダイアログではなく、リポジトリ内ルールとプロトコルで境界を管理する。',
      ],
    },
  },
  'day-26-dream-of-tb-rig': {
    en: {
      title: 'Dream of a Terabyte Rig',
      paragraphs: [
        'Hardware target: 4x80GB GPUs plus 1TB ECC RAM to run large local models without provider constraints.',
        'Local LLM operation is treated as a strategic requirement for long autonomous runs and massive context windows.',
      ],
    },
    cn: {
      title: '关于 TB 级本地算力的梦想',
      paragraphs: [
        '目标硬件是 4x80GB GPU + 1TB ECC 内存，以本地运行大模型并摆脱供应商限制。',
        '本地 LLM 被视为战略基础，可支持超长执行和超大上下文窗口。',
      ],
    },
    jp: {
      title: 'テラバイト級マシンへの構想',
      paragraphs: [
        '目標は 4x80GB GPU と 1TB ECC RAM。巨大モデルをローカルで回し、提供側制約を受けない環境を目指す。',
        '長時間連続実行と大規模コンテキスト確保のため、ローカルLLMは戦略要件と位置づけた。',
      ],
    },
  },
  'day-24-diagnostics-hierarchy': {
    en: {
      title: 'Diagnostics Hierarchy',
      paragraphs: [
        'A three-layer incident pipeline was defined: Process Supervisor signals, Ollama first-pass classification, and Codex escalation.',
        'This hierarchy reduces noisy escalations and launches deeper intervention only with structured context.',
      ],
    },
    cn: {
      title: '诊断分层体系',
      paragraphs: [
        '建立三层故障处理链路: Process Supervisor 信号源、Ollama 一线分类、Codex 升级处理。',
        '分层后可减少噪声升级，仅在结构化上下文充分时进入深度干预。',
      ],
    },
    jp: {
      title: '診断の階層化',
      paragraphs: [
        '障害対応を3層化した。Process Supervisor の信号、Ollama の一次分類、Codex のエスカレーション。',
        'ノイズの多い呼び出しを減らし、構造化コンテキスト付きのケースだけを深掘りできる。',
      ],
    },
  },
  'day-22-git-war-protocol': {
    en: {
      title: 'Protocol for the Git War',
      paragraphs: [
        'Git workflow failures forced iterative protocol tightening; by stage nine, agent behavior requires explicit operational contracts.',
        'Push rights were restricted and a dedicated `git-publish` skill was introduced, enforcing PR-only publishing.',
      ],
    },
    cn: {
      title: '与 Git 战争的协议化',
      paragraphs: [
        'Git 流程反复失控，协议持续迭代到第九版，代理执行被纳入更严格的操作契约。',
        '已收回直接推送权限并引入 `git-publish` 技能，统一走 Pull Request 发布路径。',
      ],
    },
    jp: {
      title: 'Git戦争プロトコル',
      paragraphs: [
        'Git運用の破綻が続いたため、プロトコルを段階的に強化し第9版まで更新。エージェント動作に厳格な契約を課した。',
        '直接push権限を回収し、`git-publish`スキルでPR経由のみを許可する運用へ移行。',
      ],
    },
  },
  'day-19-intent-first-insight': {
    en: {
      title: 'Intent-first Insight',
      paragraphs: [
        'Personalization experiments confirmed a key direction: not a large MVP, but proof that local intent-first execution truly works.',
        'The core objective is an operating environment where humans and machines share memory, boundaries, and goals.',
      ],
    },
    cn: {
      title: 'Intent-first 关键洞察',
      paragraphs: [
        '个性化实验验证了核心方向: 不是先做大而全 MVP，而是先证明本地 intent-first 执行可行。',
        '目标是构建一个人机共享记忆、边界与目标的运行环境。',
      ],
    },
    jp: {
      title: 'Intent-first の洞察',
      paragraphs: [
        'パーソナライズ実験で、重要なのは巨大MVPではなくローカルでの intent-first 実行の実証だと確認した。',
        '人間と機械が記憶・境界・目標を共有する実行環境が中核となる。',
      ],
    },
  },
  'day-14-autonomous-rental': {
    en: {
      title: 'Autonomous Infrastructure Rental',
      paragraphs: [
        'Bots now provision and deprovision servers autonomously per task using balance checks, crypto top-up, and image deployment.',
        'This model reaches high-end infrastructure capacity at task-based cost instead of fixed monthly burn.',
      ],
    },
    cn: {
      title: '自治式算力租用',
      paragraphs: [
        '代理已可按任务自动租用与释放服务器，并完成余额监控、加密货币补款与镜像部署。',
        '相比固定月成本，这种模式以单任务成本获得高规格基础设施能力。',
      ],
    },
    jp: {
      title: '自律型インフラ調達',
      paragraphs: [
        'ボットがタスク単位でサーバーを自動調達・停止し、残高監視や暗号資産補充、イメージ投入まで実行。',
        '固定月額ではなく、タスク課金で高性能インフラを確保できる運用を実現した。',
      ],
    },
  },
  'day-05-laziness-filter': {
    en: {
      title: 'Laziness as a Filter',
      paragraphs: [
        'A quick utility idea evolved into a new specification after deeper implementation work.',
        'The key takeaway: local models can run long research loops for hours, while short-session cloud chat is structurally limited.',
      ],
    },
    cn: {
      title: '“懒”作为过滤器',
      paragraphs: [
        '一个临时小工具需求最终演变成新的规范设计。',
        '核心体会是本地模型可以连续执行长时研究循环，而云端短会话模式先天受限。',
      ],
    },
    jp: {
      title: '怠惰をフィルタにする',
      paragraphs: [
        '軽いツール案から始めた作業が、結果として新しい仕様定義へ発展した。',
        'ローカルモデルは長時間探索に強く、短時間で切れるクラウド会話とは運用特性が異なる。',
      ],
    },
  },
  'day-01-session-not-memory': {
    en: {
      title: 'Session Instead of Memory',
      paragraphs: [
        'Core insight: LLMs do not expose a true memory reset switch; practical control is session and context management.',
        'CLI operation gives full environment-level control and turns context engineering into a primary engineering skill.',
      ],
    },
    cn: {
      title: '会话，而不是“清空记忆”',
      paragraphs: [
        '关键认知是 LLM 并不存在真实的“清空记忆”按钮，真正可控对象是会话与上下文。',
        'CLI 模式提供环境级控制能力，使上下文工程成为核心工程技能。',
      ],
    },
    jp: {
      title: '記憶ではなくセッション',
      paragraphs: [
        'LLMに「記憶を消す」機能は本質的になく、制御対象はセッションとコンテキスト管理である。',
        'CLIでは環境支配度が高く、コンテキスト設計そのものがエンジニアリング技能になる。',
      ],
    },
  },
};

const extractParagraphs = (body: string): string[] =>
  body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'));

export const getLocalizedPost = (
  entry: CollectionEntry<'devlog'>,
  lang: SupportedLang,
): LocalizedPost => {
  if (lang === entry.data.lang) {
    return {
      title: entry.data.title,
      paragraphs: extractParagraphs(entry.body),
    };
  }

  const local = DEVLOG_I18N[entry.slug]?.[lang];
  if (local) {
    return local;
  }

  return {
    title: entry.data.title,
    paragraphs: extractParagraphs(entry.body),
  };
};
