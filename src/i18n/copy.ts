import type { SupportedLang } from '../utils/i18n';

export type HomeCopy = {
  tagline: string;
  missionTitle: string;
  missionItems: [string, string, string];
  devlogPendingTitle: string;
  devlogPendingBody: string;
  devlogOpenLabel: string;
  devlogFeedLabel: string;
  devlogEntryLabel: string;
};

export type DevlogCopy = {
  title: string;
  empty: string;
  tagsLabel: string;
};

type CopyBundle = {
  home: HomeCopy;
  devlog: DevlogCopy;
};

const COPY: Record<SupportedLang, CopyBundle> = {
  en: {
    home: {
      tagline: 'The intent-first operating system for AI agents',
      missionTitle: 'THE MISSION',
      missionItems: [
        'R&D dictates the path: infrastructure needs are discovered by the research process itself.',
        'The whole Git ecosystem is now our toolbox for building better tools to work with source systems.',
        'Intent-first reality: humans and machines share memory and deterministic goals in one environment.',
      ],
      devlogPendingTitle: 'iteration_3',
      devlogPendingBody: 'Devlog timeline will appear here after first published entries.',
      devlogOpenLabel: 'OPEN ENTRY +',
      devlogFeedLabel: 'VIEW FEED +',
      devlogEntryLabel: 'DEVLOG_ENTRY',
    },
    devlog: {
      title: 'DEVLOG',
      empty: 'No entries yet. Content will be added in iteration 3.',
      tagsLabel: 'tags',
    },
  },
  ru: {
    home: {
      tagline: 'Интент-ориентированная операционная система для AI-агентов',
      missionTitle: 'МИССИЯ',
      missionItems: [
        'Путь задает R&D: инфраструктурные потребности формируются самим исследовательским процессом.',
        'Весь Git-ландшафт стал нашей базой инструментов для создания новых средств работы с кодом и знаниями.',
        'Intent-first реальность: человек и машина разделяют общую память и детерминированные цели.',
      ],
      devlogPendingTitle: 'итерация_3',
      devlogPendingBody: 'Лента devlog появится здесь после публикации первых записей.',
      devlogOpenLabel: 'ОТКРЫТЬ ЗАПИСЬ +',
      devlogFeedLabel: 'СМОТРЕТЬ ЛЕНТУ +',
      devlogEntryLabel: 'ЗАПИСЬ_DEVLOG',
    },
    devlog: {
      title: 'ДНЕВНИК',
      empty: 'Записей пока нет. Контент будет добавлен в итерации 3.',
      tagsLabel: 'теги',
    },
  },
  cn: {
    home: {
      tagline: '面向 AI 代理的意图优先操作系统',
      missionTitle: '项目使命',
      missionItems: [
        '研发决定路径: 基础设施需求由研究过程本身持续发现。',
        '整个 Git 生态已经成为我们构建下一代协作工具的基础。',
        '意图优先现实: 人与机器共享记忆并围绕确定性目标协同工作。',
      ],
      devlogPendingTitle: 'iteration_3',
      devlogPendingBody: '首批日志发布后，这里会显示最新开发记录。',
      devlogOpenLabel: '打开日志 +',
      devlogFeedLabel: '查看列表 +',
      devlogEntryLabel: '开发日志',
    },
    devlog: {
      title: '开发日志',
      empty: '暂无记录。内容将在迭代 3 中补充。',
      tagsLabel: '标签',
    },
  },
  jp: {
    home: {
      tagline: 'AIエージェントのためのインテント・ファーストOS',
      missionTitle: 'ミッション',
      missionItems: [
        'R&Dが進路を決める: インフラ要件は研究そのものから導かれる。',
        'Gitエコシステム全体を、開発と運用のための新しい道具へ再構成する。',
        'Intent-firstの世界観: 人間と機械が記憶と決定目標を共有する。',
      ],
      devlogPendingTitle: 'iteration_3',
      devlogPendingBody: '最初の投稿が公開されると、ここに最新ログが表示されます。',
      devlogOpenLabel: 'エントリーを開く +',
      devlogFeedLabel: 'フィードを見る +',
      devlogEntryLabel: 'DEVLOG_ENTRY',
    },
    devlog: {
      title: '開発ログ',
      empty: 'まだ投稿はありません。内容はイテレーション3で追加されます。',
      tagsLabel: 'タグ',
    },
  },
};

export const getCopy = (lang: SupportedLang): CopyBundle => COPY[lang];
