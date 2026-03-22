/**
 * 디자인은 완성되었지만 데이터는 Mock입니다.
 * Firebase 연동 시 아래 인터페이스를 확장하여 사용할 수 있습니다.
 */

export type PostType = 'PRO' | 'CON';

export interface Post {
  id: string;
  title: string;
  content: string;
  type: PostType;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export const NAV_ITEMS = [
  { label: '토론', href: '/debate' },
  { label: '커뮤니티', href: '/community' },
  { label: '공지사항', href: '/notice' },
  { label: '이벤트', href: '/event' },
  { label: '상점', href: '/store' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'AI 시대, 인간의 창의성은 여전히 유효한가?',
    content: '인공지능이 예술과 문학의 영역까지 침범하고 있는 현재, 인간 고유의 창의성이란 무엇인지에 대한 심도 있는 논의가 필요합니다.',
    type: 'PRO',
    author: 'Socrates',
    createdAt: '2024-03-22',
    likes: 124,
    comments: 48,
  },
  {
    id: '2',
    title: '디지털 민주주의: 직접 민주주의의 부활인가?',
    content: '블록체인과 투표 시스템을 통한 디지털 민주주의 구현은 현대 대의 민주주의의 한계를 극복할 수 있는 유일한 대안입니다.',
    type: 'CON',
    author: 'Plato',
    createdAt: '2024-03-21',
    likes: 89,
    comments: 32,
  },
  {
    id: '3',
    title: '기본소득제 도입, 경제적 자유의 시작인가 의존의 시작인가?',
    content: '자동화로 인한 일자리 감소에 대비하여 모든 시민에게 지급되는 기본소득은 생존권을 보장하는 최소한의 안전망입니다.',
    type: 'PRO',
    author: 'Aristotle',
    createdAt: '2024-03-20',
    likes: 256,
    comments: 112,
  },
];
