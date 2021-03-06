import profile0 from './muni.png'
import profile1 from './zing.png'
import profile2 from './soosoo.png'
import profile3 from './soo.png';
import profile4 from './zingzingzing.png';
import profile5 from './sooyoung.png';
import profile6 from './dh.png';
import profile7 from './dhdh.png';
import profileTrump from './trump-circle.png';
import minjiProfile from './minjiProfile.png';
import boraProfile from './boraProfile.png';
import ryanProfile from './ryanProfile.png';

const mock = {
  products: [
    {
      type: '신입 Entry',
      description: '대학생 또는 신입이신가요? 해외에서 정착할 수 있는 효과적인 방법은 무엇일까요? 가까운 미래의 해외취업 기회를 잡기 위한 전략을 만들어요.',
      link: 'entry',
      color: 'salmon',
      secondary: '#fb9f94',
      programs: [
        {
          title: "해외취업 101",
          code: '101',
          content: '해외취업 입문자를 위한 프로그램입니다. 내가 가진 강점과 배경을 이용해서 어떻게 가장 빨리 내가 원하는 곳에 갈 수 있는지 단계별 전략을 모색합니다. 현재 나의 상황에서 가장 적합한 비자 프로그램은 무엇일까요? 워킹홀리데이를 준비할까요? 외국에서 바로 취업할 수 있을까요? 한국에서 경력을 먼저 쌓아야 할까요? 가까운 미래의 해외취업 기회를 잡기 위한 전체적인 전략짜기 프로그램입니다.',
          afters: ['전략적 직무찾기', '해외취업 로드맵', '최선의 비자 프로그램', '나라별 정부 정책 이용하기', '전세계 인턴쉽 & 구직기회 찾는 노하우', '링크드인 최적화', '콜드메세지 노하우'],
          details: [
            {
              label: 'Who',
              value: '대학생, 경력 2년 이하 신입, 직무변경을 원하는 경력직'
            },
            {
              label: 'Assignment',
              value: 'MBTI, 링크드인, 영어면접 관련 과제'
            },
            {
              label: 'Length',
              value: ['2회 90분']
            }, {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            },
          ]
        }
      ],
      quote: 'Dream in decades, plan in years, live in days'
    },
    {
      type: '경력 Experienced',
      description: '경력직으로 해외취업을 계획하고 계신가요? 세계무대에서도 인상적인 지원자가 될 수 있도록 저와 함께 해외공략 전략을 만들어요.',
      link: 'experienced',
      color: '#ff7e7e',
      secondary: '#ff9797',
      programs: [
        {
          title: "해외취업 201",
          code: '201',
          content: "경력직 해외취업 입문자를 위한 프로그램입니다. 세계무대에서도 통하는 이력서는 어떻게 써야할까요? 어떻게 하면 인터뷰에서 자신이 가진 강점을 모두 어필할 수 있을까요? 한국에서 쌓아온 소중한 경력을 알차게 풀어내서 해외구직 시장에서도 강력한 지원자가 될 수 있도록 도와드릴게요. 오랜 영어강사 내공을 바탕으로 멘토링을 진행합니다.",
          afters: ['최선의 비자 프로그램', '나의 경험 멋지게 스토리 만들기', '고급 회화', '해외공략 이력서', '링크드인 최적화', '콜드메세지 노하우', '현실성 있는 계획', '연봉협상 노하우'],
          details: [
            {
              label: 'Who',
              value: '해외취업을 계획하는 경력자'
            },
            {
              label: 'Assignment',
              value: 'MBTI, 링크드인, 영어면접 관련 과제'
            },
            {
              label: 'Length',
              value: ['2회 90분']
            },
            {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            }
          ]
        },
      ],
      quote: '적을알고 나를 알면 백전백승'
    },
    {
      type: '영어 인터뷰',
      description: '해외취업의 문 턱에서 실전과 같은 인터뷰 연습이 필요하신가요? 비즈니스 영어 강사와 함께하는 실전 같은 모의면접 통해서 꼼꼼하게 준비해요.',
      link: 'english',
      color: '#e1a73c',
      secondary: '#f5ba4e',
      programs: [
        {
          title: "영어 모의 인터뷰",
          code: '202',
          content: "해외취업 성공의 마지막 관문인 인터뷰를 위한 모의 인터뷰 프로그램 입니다. 세계무대에서도 통하는 나의 강점을 무엇일까요? 중요한 것은 원어민처럼 완벽하게 말하는게 아니라 내가 가지고 있는 강점을 설득력 있게 말하는 것 입니다. 어떻게 표현해야 나의 경력을 직무와 엮어서 풀어낼 수 있을까요? 어떻게 나의 강점을 답변 속에 녹여낼 수 있을까요? 주어진 시간 안에 주어진 질문의 범위 내에서 자신을 어필하는 방법을 연습합니다. 오랜 영어강사 내공을 바탕으로 멘토링을 진행합니다.",
          afters: ['실전같은 모의인터뷰', '설득력 있는 답변 구조', '고급 회화', '나의 경험 멋지게 스토리 만들기', '자주 출제되는 인성질문 리스트', '질문의 의도 파악 스킬', '연봉협상 노하우'],
          details: [
            {
              label: 'Who',
              value: '인터뷰 실전 연습이 필요한 구직자'
            },
            {
              label: 'Assignment',
              value: 'MBTI, 영어면접 관련 과제'
            },
            {
              label: 'Length',
              value: ['1회 60분']
            },
            {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            }
          ]
        }
      ],
      quote: 'I speak your language, do you speak my lanauge?'
    },
    {
      type: '개발자로 이직하기',
      description: '개발자로 이직을 고민중이신가요? 개발공부를 하며 가이드가 필요하신가요? 첫 취직까지 어떤 공부가 필요한지 함께 로드맵을 그려봐요.',
      link: 'beginner',
      color: "#0066b2",
      secondary: "#0d78c7",
      programs: [{
        title: "개발자로 이직하기 101",
        code: '101',
        content: "개발자로 이직을 고민중이신가요? 이미 공부를 시작하셨지만 믿을 수 있는 가이드가 필요하신가요? 개발 직군 안에는 구체적으로 어떤 직군이 있을까요? 나에게 맞는 직군은 어떤 것 일까요? 그렇다면 각 직군에 따라서 무엇을, 얼마나, 어떻게 공부해야 할까요? 어느 정도 수준이 되면 구직을 할 수 있을까요? 비전공 현직 개발자와 함께 현실적인 개발 공부 로드맵 만들어봐요.",
        afters: ['개발자의 장단점', '다양한 개발직군에 대한 이해', '직군별 개발 공부 로드맵', '부트캠프 후 로드맵', '국비지원 학원 고르는 노하우', '연봉정보', '다양한 코딩교육 플랫폼 활용 방법', '개발자로써 노마드 되기', '개발자 해외취업 준비방법'],
        details: [
          {
            label: 'Who',
            value: '개발자로 이직을 고민중이신분, 개발공부를 시작하신 분, 가이드가 필요한 부트캠프 수강생'
          },
          {
            label: 'Assignment',
            value: 'MBTI 과제, 기초코딩 과제'
          },
          {
            label: 'Length',
            value: ['2회 90분']
          },
          {
            label: 'Price',
            value: '예약신청시 이메일로 안내 '
          }
        ],
      },
      {
        title: "개발자로 이직하기 102",
        code: '102',
        content: "주니어 개발자를 위한 취업준비 프로그램입니다. 주니어에게 요구되는 포트폴리오의 수준은 어느 정도 일까요? 알고리즘 실력은 얼마나 중요할까요? 엔지니어의 이력서는 어떻게 써야 할까요? 어디서 어떻게 기술면접을 준비해야 할까요? 페어 프로그래밍은 어떻게 연습하나요? 인성 면접에는 무슨 질문이 나오나요? 어떤 기준으로 회사를 지원할 회사를 골라야 할까요? 제 커리어에 도움이 되는 회사는 어떤 회사인가요? 비전공 배경에 대해 질문하면 어떻게 답변해야 할까요? 현직 개발자가 100회 이상의 면접 경험을 바탕으로 멘토링합니다.",
        afters: ['기술직 이력서 최적화', '포트폴리오 피드백', '나에게 알맞은 회사 찾기', '기술면접을 위한 무료플랫폼 활용법', '모의 기술면접', '페어 프로그래밍', '모의 인성면접', '자주 출제되는 질문', '연봉협상 노하우', '취직'],
        details: [
          {
            label: 'Who',
            value: '주니어 개발자 지원자'
          },
          {
            label: 'Assignment',
            value: 'MBTI, 알고리즘 과제, 코딩 과제, 링크드인 과제'
          },
          {
            label: 'Length',
            value: ['2회 120분']
          },
          {
            label: 'Price',
            value: '예약신청시 이메일로 안내 '
          }
        ]
      },
      ],
      quote: '도광양회'
    },
    {
      type: '개발자 해외이직',
      description: '해외를 꿈꾸는 현직 개발자이신가요? 세계 시장에서 선호하는 개발자는 어떤 특징이 있을까요? 탄탄하게 준비해서 세계 시장에 진출해요.',
      link: 'dev',
      color: '#09416c',
      secondary: '#175c91',
      programs: [
        {
          title: "개발자 해외이직하기",
          code: '101',
          content: "현직 개발자의 해외이직을 위한 프로그램입니다. 해외이직을 꿈꾸지만 준비가 막막하신가요? 해외시장에서 선호하는 개발자의 역량과 성향은 무엇일까요? 지금까지 쌓아온 소중한 개발 경력을 어떻게 어필할 수 있을까요? 인터뷰에서 당락을 결정하는 Culture Fit 준비부터 마지막의 연봉협상 노하우까지 하나의 프로그램으로 모두 준비합니다. 현직 개발자가 100회 이상의 인터뷰 경험을 바탕으로 멘토링합니다.",
          afters: ['비자전략', '해외공략 이력서', '해외시장별 공략 방법', '콜드메세지 노하우', '연봉 정보', '실전같은 모의 면접', '자주 출제되는 질문', 'Culture Fit 면접 준비', '인터뷰 질문 의도 파악 팁', '연봉협상 노하우', '해외이직'],
          details: [
            {
              label: 'Who',
              value: '해외이직을 준비하는 현직 개발자'
            },
            {
              label: 'Assignment',
              value: 'MBTI, 링크드인 과제, 면접관련 과제'
            },
            {
              label: 'Length',
              value: ['2회 90분']
            },
            {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            }
          ]
        }
      ],
      quote: 'I speak your language, do you speak my lanauge?'
    },
    {
      type: '프론트엔드 인터뷰',
      description: '실전과 같은 환경에서 기술면접 연습이 필요하신가요? 시니어 프론트엔드 개발자와 진행하는 모의면접을 통해서 부족한 점을 보충해요. ',
      link: 'frontend',
      color: '#218b50',
      secondary: '#2ba561',
      programs: [
        {
          title: "프론트엔드 인터뷰",
          code: '401',
          content: "실전과 같은 환경에서 기술면접 연습이 필요하신가요? 시니어 프론트엔드 개발자와 함께 진행하는 프론트엔드 기술면접 프로그램입니다. 실전과 같은 환경에서 페어 프로그래밍을 진행합니다. 자주 나오는 질문리스트를 기반으로 구술로 풀어내야하는 기술면접 노하우를 멘토링합니다. 면접 답변 속에서 엔지니어로서 자신을 어필할 수 있는 방법도 알려 드릴게요. 현직 개발자가 100회 이상의 면접 경험을 바탕으로 멘토링합니다. *프론트엔드 모의 인터뷰는 React, React Native, Vanilla Javascript 으로만 진행합니다.* ",
          afters: ['구술기술면접', '압박면접 연습', '페어 프로그래밍', '인성면접', '산업별 특징', '프론트엔드 단골 질문', 'Javascript 단골 질문', 'React 단골 질문', 'React Native 단골 질문', '질문자 의도 파악 스킬', '연봉협상 노하우'],
          details: [
            {
              label: 'Who',
              value: '프론트엔드 직무 구직자'
            },
            {
              label: 'Length',
              value: ['1회 90분']
            },
            {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            }
          ]
        }
      ],
      quote: 'Everything we do, the user is at the centre of my heart'
    },
    {
      type: '커피챗',
      description: '적당한 프로그램을 찾지 못하셨나요? 저에게 묻고싶은 다른 질문이 있으신가요? 저와 커피 한 잔 하면서 자유롭게 이야기해요.',
      link: 'coffeechat',
      color: '#795548',
      secondary: '#8d6658',
      programs: [
        {
          title: "커피챗",
          code: '501',
          content: "마음에 드는 프로그램이 없으신가요? 저에게 묻고 싶은 다른 질문이 있으신가요? 아래에 적어놓은 키워드 중 궁금하신 게 있으시다면 제가 알고있는 것을 공유할게요. 다른 질문을 가지고 오셔도 괜찮아요.",
          afters: ['심리학', '비전공 개발자', '해외 개발자', '해외취업', '영국취업', '해외인턴', '스페인', '디지털노마드', '영어인터뷰', '토플', '스페인', '델레', '워킹홀리데이', '세계여행', '국제연애',],
          details: [
            {
              label: 'Who',
              value: '누구나'
            },
            {
              label: 'Length',
              value: ['30분']
            },
            {
              label: 'Price',
              value: '예약신청시 이메일로 안내 '
            }
          ]
        }
      ],
      quote: 'Always try to learn from peoples mistake not your own. it is much cheaper that way!'
    }
  ],
  reviews: {
    all: [{
      color: '#8d6658',
      name: '손민지',
      link: '/coffeechat',
      profile: minjiProfile,
      job: '',
      at: '@ 비공개',
      program: ['커피챗'], content: '"우선, 방황하는 젊은이로서 불안함과 조급함이 가장 큰 고민이었는데 그런 부분에서 아직 시간은 충분하고 가능성도 무한하다고 해주신 게 큰 위로가 되었습니다. 헤더님도 저와 비슷한 고민을 하셨다는 게 느껴질만큼 깊게 공감해주셔서 좋았어요. 또 제 얘기를 천천히 들어주시면서도 그 안에서 키워드를 딱딱 잡아내셔서 저에게 필요한 이야기를 착착 알려주시는 모습이 인상적이었습니다. 무언가를 새로 시작할 때, 어디서부터 무엇을 어떻게 해야하나 하는 "막막함"이 제일 어려워서 두서없이 이야기를 내뱉게 되는데요.커피챗이었지만 그냥 서로 고민얘기하고 수다만 떨다가 끝나는 시간이 아니라 고민1- 대답1 / 고민2 - 대답2 이런 느낌으로 정리를 해주셔서 좋았어요. 제가 가고자 하는 길을 먼저 경험하고 심지어 끌어줄 의지도 있는 분을 알게되어 기쁩니다.아직 흐릿하지만 저도 할 수 있을 것 같다는 자신감과 긍정의 기운을 받아서 즐거운 시간이었어요."'
    }, {
      color: '#218b50',
      name: '진보라',
      link: '/',
      profile: boraProfile,
      job: '웹 퍼플리셔 & 프로젝트 매니저',
      at: '@ 비공개',
      program: ['비전공 개발자로 이직하기 세미나'],
      content: '"디자인 전공자로서 디자인도 하고 퍼블리싱도 하고 PM직무라는 업무까지 하게 되는 커리어가 꼬일대로 꼬여버린 상황 속에서 혼자 개발을 독학을 하자니 끝까지 이어가기가 쉽지 않고 그렇다고 그만두고 학원을 다니자니 비싼 비용과 30대 초반이라는 현실적인 제약 속에서 갇혀 이도 저도 못하고 있었습니다. 그러던 중 지인의 소개로 헤더님을 알게 되었고 요청한 세미나는 짧은 시간이었지만 요 몇주간 하던 고민의 짐을 어느정도 해결할 수 있었던 좋은 시간이였습니다. 하고싶은 것은 개발업무였지만 수명이 짧다는 얘기와 여러가지 힘든 상황을 보면서 개발보다는 디자인 전공을 하며 배운 기획과 디자인 중 선택하는게 나에게 더 빛이 날 수 있는 길이 되어주지 않을까라며 개발에 대해서는 점점 등을 돌리고 있었는데 다시 한번 용기를 낼 수 있는 시간이 되어주었던 것 같습니다. 개발을 하려면 그 일을 하고자하는 명확한 이유가 있어야하고 그는 개발을 하면서 느끼는 즐거움과 연관이 되어야만 살아남을 수 있다는 얘기를 수없이 들으며 그 틀에 맞추려하며 제 자신을 채찍질하던 지난 시간이 그럴 필요까지는 없었다는 것도 느낄 수 있었어요. 오히려 그런 채찍질을 할 시간보다는 제 자신을 위로하며 응원했었더라면 조금 더 고민의 짐이 덜 수 있지 않았을까라는 생각이 드네요. 세미나였기에 시간이 짧아서 아쉬웠지만 조금 더 생각을 정리한 후 프로그램을 신청할 생각입니다 :) 너무나도 감사했습니다! "'
    },
    {
      color: 'grey',
      name: '라이언',
      link: '/coffeechat',
      profile: ryanProfile,
      job: '',
      at: '@ 비공개',
      program: ['커피챗'], content: '"부트캠프를 수료했고, 일을 6개월 했습니다. 일을 하면서도, 너무 못한다는 생각에 자괴감에 빠져서, 개발자로 계속 도전 해야 하는 건지 고민을 하는 과정에 있었습니다. 헤더 님은 블로그를 통해서 알게 되었고, 커피챗으로 조언을 듣게 되었습니다. 헤더 님은 저와 대화를 하시면서, 제가 어떤 사람인 지를 짧은 시간에 파악하셨고, 어떠한 마음 가짐으로 살아가는 것이 좋을 지 조언을 해주셨습니다. 그리고, 제가 왜 개발자로 이직을 하고 싶었는 지, 왜 이 힘든 길을 선택했었는 지에 대해서 다시금 생각해보는 계기가 되었습니다. 처음 뵈어서, 딱딱할 수도 있는 대화가 될 수도 있었는데, 유익하고, 즐거운 대화가 되었습니다. 감사합니다."'
    },

    {
      color: '#fb9f94',
      name: '장윤정',
      link: '/entry',
      profile: profile4,
      job: '슈퍼바이저',
      at: '@ Jeju Airline',
      program: ['해외취업 101'],
      content: '"해외에 나가서 일을 하는게 로망이어서 항상 해외취업에 관심이 있었는데 실제로 어떻게 준비해야 하는지 모르겠더라구요. 제가 유창하게 영어를 구사하는 것도 아니어서 이것저것 검색해보다가 헤더님 블로그를 우연히 알게 됐어요! 조심스럽게 문의했더니 영어를 원어민처럼 못해도 해외에서 일할 수 있다고 하셔서 당장 프로그램 신청했죠. 이제까지 막막하게 고민만 했다면, 프로그램 지원하는 순간부터 하나씩 미션 클리어하는것 처럼 차츰 해결이 되더라구요. 제가 원하는 국가과 직무를 구체화할 수 있었고, 사전 과제로 제출한 MBTI를 바탕으로 지금까지 스스로는 알지 못했던 강점을 짚어주셨구요. 그것을 제 경력과 엮어서 멋진 스토리를 만들어주셨어요. 프로그램에서 배운대로  콜드메시지와 콜드 메일을 보내고 있는데 실제로 인터뷰 요청이 오고 있어서 정말 꿈꾸고 있는거 같애요. 많은 경험에서 우러나는 폭넓고 생생한 조언들도 너무 좋았고, 무엇보다 진심으로 저의 꿈을 응원해주시면서 적극적으로 멘토링해주셔서 이렇게 좋은 시그널이 있는거 같애요! 저처럼 영어에 자신 없는 분들도 도전해보시라고 적극 추천드립니다."'
    },
    {
      color: '#ff7e7e',
      name: '이수현',
      link: '/experienced',
      profile: profile3,
      job: 'Sales Manager',
      at: '@ Sartorius Bioreactors. Göttingen, Germany',
      program: ['해외취업 201'],
      content: '"독일에서 대학교를 졸업하고 한국으로 와서 취업을 했어요. 한국에서 좋은 기업에 취직했지만 유럽 생활이 그립기도 하고 한번쯤은 유럽에서 일해보고 싶다는 생각을 했어요. 지금까지 경력을 쌓아온 직무나 업계가 사실 맘에 들고 사회초년생이 아니라서 여태까지 쌓아온 경력을 포기하고 싶지는 않았어요. 멘토링을 받는 동안 현재의 직무경력을 살릴 수 있는 방향성을 지킬 수 있게 도와주셨고 최악의 상황을 대비해 유럽의 구직시장에서 기회를 얻는 데 도움이 되는 유럽의 단기 대학원 프로그램도 소개해주셨어요. 무조건 취업이 바로 될거라고 말씀하시기보다는 목적을 이룰 수 있는 모든 방법을 함께 고민해주셨어요. 그런 다른 전략들이 해외취업 실패가 아니라 내가 가고 싶은 곳으로 가기 위해 멀어 보이지만 더 오히려 빠른 길일 수도 있다고 말씀해주셨습니다. 프로그램 중에서 이전까지는 계정만 있었던 링크드인을 효과적으로 활용하는 방법이 저에게 큰 도움이 되었습니다. 콜드메세지로 시작된 대화가 결국 독일시장 취업의 결정적인 기회가 되었습니다. 경력직으로 들어가는 만큼 연봉도 잘 조정해서 가고 싶었는데 프로그램에서 연봉현상 노하우도 알려주셔서 너무 좋았어요. 헤더님의 현실적이면서도 따뜻한 조언 덕분에 끝까지 포기하지 않고 독일로 돌아갈 수 있게 되서 기뻐요."',
    },
    {
      color: '#0d78c7',
      name: '김동현',
      link: '/beginner',
      profile: profile7,
      job: "개발 공부중",
      at: '@ 우리집',
      program: ['개발자로 이직하기 101'],
      content: '"대기업에 재직 중인 30대 초반입니다. 결혼하고 아기가 생기면서 개발로 이직을 하기로 결심한 후 지인의 소개로 헤더님을 알게 됬습니다. 궁금한 점도 많고 걱정도 많았는데 비전공자 개발자의 입장에서 현실적으로 어떤 부분이 힘든지 어떻게 해야 효율적으로 공부할 수 있는지 말씀해주셨고 평균 연봉수준이나 전망과 같은 저에게는 너무 중요한 정보도 알려주셨습니다. 저는 국비 지원 교육을 계획하고 있었는데 학원이랑 프로그램이 너무 많아서 어떤 것을 선택해야 할 지 고민하고 있었습니다. 그 부분에 대해서 취업에 유리한 언어는 무엇이고 요새 많이 쓰이는 언어나 프레임워크는 무엇인지 구체적으로 설명해주신 점이 도움이 많이 되었습니다. 개발자로 이직하기 101 프로그램을 듣고 굳이 국비지원 프로그램을 들을 필요가 없겠다고 결론을 내려 지금은 헤더님과 함께 만든 로드맵을 중심으로 독학하고 있습니다. 적지 않은 나이라고 생각해서 정말 많이 고민하고 망설였는데 헤더님이 알고 계시는 나이가 많은 개발자들, 컴퓨터 계열 전공이 아닌 개발자들 이야기를 많이 들으면서 저도 용기를 낼 수 있었습니다." ',
    },
    {
      color: '#2ba561',
      name: '양소영',
      link: '/frontend',
      profile: profile5,
      job: "안드로이드 개발자",
      at: '@ UCWARE',
      program: ['프론트엔드 인터뷰'],
      content: '"현직 안드로이드 개발자로 일하고 있어요. 커리어 초반부터 안드로이드 개발을 했는데 예전부터 UX에 관심이 있다보니 자연스럽게 프론트엔드 개발에도 관심이 갔어요. 우연히 업무에서 리액트를 쓰는 기회가 있었는데 저와 잘맞고 재밌어서 따로 공부를 했고 다음 직무로는 프론트엔드 개발로 가볼까 고민하고 있었습니다. 블로그를 통해서 헤더님을 알게 되었고 프론트엔드 인터뷰 프로그램을 수강했어요. 페어 프로그래밍은 실전과 동일한 환경에서 진행되서 실제 인터뷰 같이 긴장하면서 시험을 봤어요. 피드백 시간에 페어 프로그래밍을 하는 시간에 어떻게 하면 제 자신을 좋은 동료로써 어필할 수 있을 지 알려 주셨을 때 정말 아하! 했습니다. 혼자 리액트를 공부하기는 했지만, 리액트 개발 경험이 풍부하신 현직자께서 포인트를 짚어주셔서 곧 프론트엔드 개발자로 지원할 때 어떤 부분을 집중적으로 공부하고 준비해야 하는지 알게됬어요."',
    },
    {
      color: '#09416c',
      name: '김현지',
      link: '/dev',
      profile: profile2,
      job: "Fullstack Engineer",
      at: '@ Credit Karma. London, UK',
      program: ['개발자 해외이직하기'],
      content: '"한국 중소기업 스타트업에서 2년 정도 개발자로 일했어요. 다음 회사는 외국에서 다니고 싶어서 알아보던 중 지인의 지인을 통해서 헤더님을 알게됬습니다. 사실 별 기대 없이 링크드인 메세지를 보냈는데 답장을 정말 친절하고 자세하게 해주셨어요! 영어 점수는 꽤 높은 편이었지만 프리토킹은 자신이 없는게 항상 고민이었는데 헤더님이랑 이야기하고 이직에 대한 자신감이 조금씩 생기면서 이 프로그램을 듣기로 결정했어요. 영국을 너무 좋아해서 영국을 목표로 잡았는데 현지회사에서 많이 쓰는 기술 스택을 구체적으로 알려주셨어요. 사실 한국에서 취직, 이직할 때랑 절차와 기준이 많이 달라서 이 프로그램을 듣지 않았으면 정말 시간 낭비 했을 것 같아요. 실전 인터뷰를 준비하는 과정에서도 코딩 테스트와 인성면접 꿀팁도 세세하게 알려주셔서 좋았습니다. 자주 나오는 질문에 답변을 할 때 제 성격적인 장점과 엔지니어로서의 실력을 동시에 표현할 수 있는 방법도 배웠어요. 공격적으로 지원을 하긴 했지만 구직을 시작한 지 한달도 채 안되서 채용이 확정됐어요. 저처럼 늘 해외취업을 생각해왔지만 자신이 없어 실행에 옮기지 못한 분들에게 헤더님 프로그램을 적극 추천합니다!"',
    },
    {
      color: '#e1a73c',
      name: '이현동',
      link: '/english',
      profile: profile6,
      job: 'Technical Sales Manager',
      at: '@ Good Years. Akron, Ohio, USA',
      program: ['영어 모의 인터뷰'],
      content: '"저는 미국계 회사에서 근무하는 30대 후반 중반 직장인입니다. 사내에서 해외 근무 할 수 있는 기회가 있어 영어 인터뷰 연습이 필요한 상황이었습니다. 매니저직으로 발령받는 것이기 때문에 고급스럽고 설득력 있게 제 자신을 표현하는 것을 목표로 했습니다. 회사 내에서 열리는 비즈니스 영어 강의에서 헤더선생님을 처음에 뵜는데 수업이 일단 재밌고 선생님이 굉장히 열정적이셨습니다. 개인적으로 연락을 드려서 이번 프로그램을 수강하게 됬는데 모의 인터뷰를 실제처럼 엄격하게 진행하는 점이 가장 좋았습니다. 진짜 인터뷰라고 생각하니 많이 긴장이되서 생각했던 것보다도 더 못했지만 실제 인터뷰가 아니라는게 정말 다행이었습니다. 피드백이 정말 정확하고 꼼꼼했습니다. 그 동안 회사에서 해왔던 업무 성과와 저의 MBTI 강점을 자연스럽게 답변에 덧대서 제 자신을 피력하는 방법도 인상 깊었습니다. 선생님께서 알려주신 답변구조 짜는 방법을 중점적으로 연습했고 실제 면접 날짜가 다가왔을 때에는 많이 고민하지 않고 좋은 답변 구조를 짤 수 있을 만큼 많이 연습했습니다. 많이 준비한 만큼 좋은 성과로 돌아왔고 헤더선생님 덕분에 좋은 기회를 얻을 수 있게 되었습니다."',
    },
    {
      color: "#0066b2",
      name: '이문영',
      link: '/beginner',
      profile: profile0,
      job: "주니어 소프트웨어 엔지니어",
      at: '@ Lynn Company',
      program: ['개발자로 이직하기 101', '102'],
      content: '"5개월 온라인 부트 캠프로  공부 했는데 부트 캠프가 끝나고도 준비가 덜 되었다는 불안감이 있어서인지 자신감이 없었어요. 그러다가 우연히 링크드인을 통해서 헤더님을 알게되고 <개발자로 이직하기 프로그램>을 알게 됐어요. 101 수업에서 헤더님과 함께 제가 원하는 직무를 목표로 구체적인 로드맵을 만들었어요. 이 로드맵을 기반으로 지원하기 전에 심화학습이 필요할 것 같은 항목에 대해서 체크리스트를 만들었습니다. 체크리스트를 따라가며 취직 준비하니까 차츰 자신감이 붙어갔고 덕분에 개발공부에 더 집중할 수 있었어요. 나름대로 준비가 됐다고 생각했을 때 개발자로 이직하기 102 프로그램도 수강했습니다. 개발자로 취준을 하는 건 처음이다보니 어떻게 이력서를 써야하는 지, 어떻게 면접을 준비해야하는지 전혀 감이 잘 오지 않았는데 헤더님 멘토링이 많이 도움이 됐어요. 또, 혼자서 포트폴리오를 하면서 주니어 개발자에게 어떤 수준의 포트폴리오를 기대하는지 몰라서 막연한 마음에 자신이 없었는데 헤더님이 구체적으로 방향성을 잡아주셔서 수월하게 포트폴리오를 보완했어요. 모의 면접 다뤘던 자바스크립트 문제가 그대로 출제된 적도 여러번이었고 인성 면접도 연습했던 질문이랑 비슷한 질문이 많이 나왔어요. 덕분에 생각했던 것보다 훨씬 빨리 주니어로 취직할 수 있었어요. 경력이 좀 쌓이면 궁극적으로 미국취업을 준비하고 싶은데 그 때도 꼭 헤더님 프로그램을 듣고싶어요. 그 때도 잘 부탁드려요 :)"',
    },
    {
      color: '#ff9797',
      name: '이소정',
      link: '/experienced',
      profile: profile1,
      job: '프로덕트 매니저 Product Manager',
      at: '@ Fluidy. London, UK',
      program: ['해외취업 201', '영어 모의 인터뷰'],
      content: '"교환학생 때 저와 너무 잘 맞았던 영국에서 취업하고 싶어서 검색하다가 링크드인을 통해서 헤더님을 알게됬어요. 지금까지 한국 회사에서 쌓은 경력들을 살릴 수 있는 포인트를 알려주신 게 정말 좋았어요. 목표 설정한 직무에 맞춰서 이력서를 완전히 새롭게 쓰는 노하우도 알려주셨어요. 제가 지금까지 이뤄왔던 여러가지 크고 작은 업무적 성과를 잘 이용할 수 있는 방식으로 이력서도 재정비했고 인터뷰 답변도 연습했습니다. 영어 강사를 오래하셔서 그런지 멘토링 이후 이력서와 인터뷰 예상 질문의 답변의 수준이 확실히 올라갔어요. 초반에는 처음에 201 프로그램을 듣고 헤더님과 함께 했던 과제를 바탕으로 계속 지원서를 넣었어요. 인터뷰 일정이 잡히기 시작하면서 영어인터뷰 프로그램도 들었어요. 때로는 친구처럼 공감해주시고 격려해주셨고 모의 면접을 진행할 때는 엄격하게 지적해주셨어요. 프로그램 내내 정말 열정적인 분이라고 생각했어요. 실제 상황이랑 비슷하게 모의 인터뷰를 여러번 보는게 정말 많이 도움이 됬고 결국 런던에 있는 회사에서 오퍼를 받았습니다."'
    },
    ],
    entry: {
      101: {
        name: '장윤정',
        profile: profile4,
        job: '슈퍼바이저',
        at: '@Jeju Airline',
        program: ['해외취업 101'],
        content: '"해외에 나가서 일을 하는게 로망이어서 항상 해외취업에 관심이 있었는데 실제로 어떻게 준비해야 하는지 모르겠더라구요. 제가 유창하게 영어를 구사하는 것도 아니어서 이것저것 검색해보다가 헤더님 블로그를 우연히 알게 됐어요! 조심스럽게 문의했더니 영어를 원어민처럼 못해도 해외에서 일할 수 있다고 하셔서 당장 프로그램 신청했죠. 이제까지 막막하게 고민만 했다면, 프로그램 지원하는 순간부터 하나씩 미션 클리어하는것 처럼 차츰 해결이 되더라구요. 제가 원하는 국가과 직무를 구체화할 수 있었고, 사전 과제로 제출한 MBTI를 바탕으로 지금까지 스스로는 알지 못했던 강점을 짚어주셨구요. 그것을 제 경력과 엮어서 멋진 스토리를 만들어주셨어요. 프로그램에서 배운 대로  콜드메시지와 콜드 메일을 보내고 있는데 실제로 인터뷰 요청이 오고 있어서 정말 꿈꾸고 있는거 같애요. 많은 경험에서 우러나는 폭넓고 생생한 조언들도 너무 좋았고, 무엇보다 진심으로 저의 꿈을 응원해주시면서 적극적으로 멘토링해주셔서 이렇게 좋은 시그널이 있는거 같애요! 저처럼 영어에 자신 없는 분들도 도전해보시라고 적극 추천드립니다."'
      }
    },
    experienced: {
      201: {
        name: '이수현',
        profile: profile3,
        job: 'Sales Manager',
        at: '@ Sartorius Bioreactors. Göttingen, Germany',
        program: ['해외취업 201'],
        content: '"독일에서 대학교를 졸업하고 한국으로 와서 취업을 했어요. 한국에서 좋은 기업에 취직했지만 유럽 생활이 그립기도 하고 한번쯤은 유럽에서 일해보고 싶다는 생각을 했어요. 지금까지 경력을 쌓아온 직무나 업계가 사실 맘에 들고 사회초년생이 아니라서 여태까지 쌓아온 경력을 포기하고 싶지는 않았어요. 멘토링을 받는 동안 현재의 직무경력을 살릴 수 있는 방향성을 지킬 수 있게 도와주셨고 최악의 상황을 대비해 유럽의 구직시장에서 기회를 얻는 데 도움이 되는 유럽의 단기 대학원 프로그램도 소개해주셨어요. 무조건 취업이 바로 될거라고 말씀하시기보다는 목적을 이룰 수 있는 모든 방법을 함께 고민해주셨어요. 그런 다른 전략들이 해외취업 실패가 아니라 내가 가고 싶은 곳으로 가기 위해 멀어 보이지만 더 오히려 빠른 길일 수도 있다고 말씀해주셨습니다. 프로그램 중에서 이전까지는 계정만 있었던 링크드인을 효과적으로 활용하는 방법이 저에게 큰 도움이 되었습니다. 콜드메세지로 시작된 대화가 결국 독일시장 취업의 결정적인 기회가 되었습니다. 경력직으로 들어가는 만큼 연봉도 잘 조정해서 가고 싶었는데 프로그램에서 연봉현상 노하우도 알려주셔서 너무 좋았어요. 헤더님의 현실적이면서도 따뜻한 조언 덕분에 끝까지 포기하지 않고 독일로 돌아갈 수 있게 되서 기뻐요."',
      },
    },
    english: {
      101: {
        name: '이현동',
        profile: profile6,
        job: 'Technical Sales Manager',
        at: '@ Good Years. Akron, Ohio, USA',
        program: ['영어 모의 인터뷰'],
        content: '"미국계 회사에서 근무하는 30대 후반 중반 직장인입니다. 사내에서 해외 근무 할 수 있는 기회가 있어 영어 인터뷰 연습이 필요한 상황이었습니다. 매니저직으로 발령받는 것이기 때문에 고급스럽고 설득력 있게 제 자신을 표현하는 것을 목표로 했습니다. 회사 내에서 열리는 비즈니스 영어 강의에서 헤더선생님을 처음에 뵜는데 수업이 일단 재밌고 선생님이 굉장히 열정적이셨습니다. 개인적으로 연락을 드려서 이번 프로그램을 수강하게 됬는데 모의 인터뷰를 실제처럼 엄격하게 진행하는 점이 가장 좋았습니다. 진짜 인터뷰라고 생각하니 많이 긴장이되서 생각했던 것보다도 더 못했지만 실제 인터뷰가 아니라는게 정말 다행이었습니다. 피드백이 정말 정확하고 꼼꼼했습니다. 그 동안 회사에서 해왔던 업무 성과와 저의 MBTI 강점을 자연스럽게 답변에 덧대서 제 자신을 피력하는 방법도 인상 깊었습니다. 선생님께서 알려주신 답변구조 짜는 방법을 중점적으로 연습했고 실제 면접 날짜가 다가왔을 때에는 많이 고민하지 않고 좋은 답변 구조를 짤 수 있을 만큼 많이 연습했습니다. 많이 준비한 만큼 좋은 성과로 돌아왔고 헤더선생님 덕분에 좋은 기회를 얻을 수 있게 되었습니다."',
      }
    },
    beginnner: {
      101: {
        name: '김동현',
        profile: profile7,
        job: "개발 공부중",
        at: '@우리집',
        program: ['개발자로 이직하기 101'],
        content: '"대기업에 재직 중인 30대 초반입니다. 결혼하고 아기가 생기면서 개발로 이직을 하기로 결심한 후 지인의 소개로 헤더님을 알게 됬습니다. 궁금한 점도 많고 걱정도 많았는데 비전공자 개발자의 입장에서 현실적으로 어떤 부분이 힘든지 어떻게 해야 효율적으로 공부할 수 있는지 말씀해주셨고 평균 연봉수준이나 전망과 같은 저에게는 너무 중요한 정보도 알려주셨습니다. 저는 국비 지원 교육을 계획하고 있었는데 학원이랑 프로그램이 너무 많아서 어떤 것을 선택해야 할 지 고민하고 있었습니다. 그 부분에 대해서 취업에 유리한 언어는 무엇이고 요새 많이 쓰이는 언어나 프레임워크는 무엇인지 구체적으로 설명해주신 점이 도움이 많이 되었습니다. 개발자로 이직하기 101 프로그램을 듣고 굳이 국비지원 프로그램을 들을 필요가 없겠다고 결론을 내려 지금은 헤더님과 함께 만든 로드맵을 중심으로 독학하고 있습니다. 적지 않은 나이라고 생각해서 정말 많이 고민하고 망설였는데 헤더님이 알고 계시는 나이가 많은 개발자들, 컴퓨터 계열 전공이 아닌 개발자들 이야기를 많이 들으면서 저도 용기를 낼 수 있었습니다." ',
      },
      102: {
        name: '이문영',
        profile: profile0,
        job: "주니어 소프트웨어 엔지니어",
        at: '@Lynn Company',
        program: ['개발자로 이직하기 101', '102'],
        content: '"5개월 온라인 부트 캠프로  공부 했는데 부트 캠프가 끝나고도 준비가 덜 되었다는 불안감이 있어서인지 자신감이 없었어요. 그러다가 우연히 링크드인을 통해서 헤더님을 알게되고 <개발자로 이직하기 프로그램>을 알게 됐어요. 101 수업에서 헤더님과 함께 제가 원하는 직무를 목표로 구체적인 로드맵을 만들었어요. 이 로드맵을 기반으로 지원하기 전에 심화학습이 필요할 것 같은 항목에 대해서 체크리스트를 만들었습니다. 체크리스트를 따라가며 취직 준비하니까 차츰 자신감이 붙어갔고 덕분에 개발공부에 더 집중할 수 있었어요. 나름대로 준비가 됐다고 생각했을 때 개발자로 이직하기 102 프로그램도 수강했습니다. 개발자로 취준을 하는 건 처음이다보니 어떻게 이력서를 써야하는 지, 어떻게 면접을 준비해야하는지 전혀 감이 잘 오지 않았는데 헤더님 멘토링이 많이 도움이 됐어요. 또, 혼자서 포트폴리오를 준비해야했다면 주니어 개발자에게 어떤 수준의 포트폴리오를 기대하는지 몰라서 막연한 마음에 좌절을 맛봤을테지만 헤더님이 구체적으로 방향성을 잡아주셔서 수월하게 해낼 수 있었어요. 모의 면접 다뤘던 자바스크립트 문제가 그대로 출제된 적도 여러번이었고 인성 면접도 연습했던 질문이랑 비슷한 질문이 많이 나왔어요. 덕분에 생각했던 것보다 훨씬 빨리 주니어로 취직할 수 있었어요. 경력이 좀 쌓이면 궁극적으로 미국취업을 준비하고 싶은데 그 때도 꼭 헤더님 프로그램을 듣고싶어요. 그 때도 잘 부탁드려요 :)"',
      },
    },
    dev: {
      101: {
        name: '김현지',
        profile: profile2,
        job: "Fullstack Engineer",
        at: '@ Credit Karma',
        program: ['개발자 해외이직하기'],
        content: '"한국 중소기업 스타트업에서 2년 정도 개발자로 일했어요. 다음 회사는 외국에서 다니고 싶어서 알아보던 중 지인의 지인을 통해서 헤더님을 알게됬습니다. 사실 별 기대 없이 링크드인 메세지를 보냈는데 답장을 정말 친절하고 자세하게 해주셨어요! 영어 점수는 꽤 높은 편이었지만 프리토킹은 자신이 없는게 항상 고민이었는데 헤더님이랑 이야기하고 이직에 대한 자신감이 조금씩 생기면서 이 프로그램을 듣기로 결정했어요. 영국을 너무 좋아해서 영국을 목표로 잡았는데 현지회사에서 많이 쓰는 기술 스택을 구체적으로 알려주셨어요. 사실 한국에서 취직, 이직할 때랑 절차와 기준이 많이 달라서 이 프로그램을 듣지 않았으면 정말 시간 낭비 했을 것 같아요. 실전 인터뷰를 준비하는 과정에서도 코딩 테스트와 인성면접 꿀팁도 세세하게 알려주셔서 좋았습니다. 자주 나오는 질문에 답변을 할 때 제 성격적인 장점과 엔지니어로서의 실력을 동시에 표현할 수 있는 방법도 배웠어요. 공격적으로 지원을 하긴 했지만 구직을 시작한 지 한달도 채 안되서 채용이 확정됐어요. 저처럼 늘 해외취업을 생각해왔지만 자신이 없어 실행에 옮기지 못한 분들에게 헤더님 프로그램을 적극 추천합니다!" ',
      },
    },
    frontend: {
      101: {
        name: '양소영',
        profile: profile5,
        job: "안드로이드 개발자",
        at: '@ UCWARE',
        program: ['프론트엔드 인터뷰'],
        content: '"현직 안드로이드 개발자로 일하고 있어요. 커리어 초반부터 안드로이드 개발을 했는데 예전부터 UX에 관심이 있다보니 자연스럽게 프론트엔드 개발에도 관심이 갔어요. 우연히 업무에서 리액트를 쓰는 기회가 있었는데 저와 잘맞고 재밌어서 따로 공부를 했고 다음 직무로는 프론트엔드 개발로 가볼까 고민하고 있었습니다. 블로그를 통해서 헤더님을 알게 되었고 프론트엔드 인터뷰 프로그램을 수강했어요. 페어 프로그래밍은 실전과 동일한 환경에서 진행되서 실제 인터뷰 같이 긴장하면서 시험을 봤어요. 피드백 시간에 페어 프로그래밍을 하는 시간에 어떻게 하면 제 자신을 좋은 동료로써 어필할 수 있을 지 알려 주셨을 때 정말 아하! 했습니다. 혼자 리액트를 공부하기는 했지만, 리액트 개발 경험이 풍부하신 현직자께서 포인트를 짚어주셔서 곧 프론트엔드 개발자로 지원할 때 어떤 부분을 집중적으로 공부하고 준비해야 하는지 알게됬어요."',
      },
    },
    coffee: {
      101: {
        name: 'Donald Trump',
        profile: profileTrump,
        job: '',
        at: '',
        program: [],
        content: '"Always try to learn from peoples mistake not your own. it is much cheaper that way!"',
      }
    }
  }
}


export default mock