'use client'

import { useLanguage } from '@/contexts/LanguageContext'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { language } = useLanguage()

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-800">
              {language === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </h2>
            <button
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 text-slate-700 hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="prose prose-slate max-w-none">
            {language === 'ko' ? (
              <>
                <p className="text-slate-700 leading-relaxed mb-6">
                  '나노비크(주)'는 (이하 '회사'는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. 개인정보 처리 목적</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
                </p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-6 space-y-2">
                  <li>가. 채용 : 가입 기본 정보 등록에 따른 본인 식별·인증, 입사전형 진행, 입사 지원서 수정, 합격 여부 확인, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.</li>
                  <li>나. 고객 상담 및 기술지원</li>
                  <li>다. 재화 또는 서비스 제공 : 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증 등</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. 개인정보파일 현황</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  회사가 개인정보 보호법 제32조에 따라 등록 및 활용하는 개인정보파일의 처리목적은 다음과 같습니다.
                </p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-6 space-y-2">
                  <li>가. 수집방법 : 홈페이지, 제휴사로부터 제공 받음, 생성정보 수집 툴을 통한 수집</li>
                  <li>나. 보유근거 : 당사 정보보호 관리 규정</li>
                  <li>다. 보유기간 : 3년</li>
                  <li>라. 관련법령 : 통신비밀보호법 3개월 이상</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. 개인정보의 처리 및 보유 기간</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  가. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">나. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-6 space-y-2">
                  <li>① 적용범위 : 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 등</li>
                  <li>② 보유근거 : 관련 법령 준수</li>
                  <li>③ 관련법령 : 통신비밀보호법 3개월 이상</li>
                  <li>④ 예외사유 : 당사 홈페이지 사전 공지 및 이메일 통보</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. 개인정보의 제3자 제공</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  가. 회사는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에 한하여 별도 공지를 통해 개인정보를 제3자에게 제공합니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. 개인정보 처리업무의 위탁</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  가. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">나. 위탁 사항</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 space-y-2">
                  <li>① 위탁받는자 (수탁자) : 개별 건 발생시 별도 공지</li>
                  <li>② 위탁하는 업무의 내용 : 채용 지원자 이용에 따른 본인 확인 및 기타 채용 과정별 개인 기록 활용, 불만처리 등 민원처리, 고지사항 전달 등</li>
                  <li>③ 위탁기간 : 1년 6개월</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">
                  다. 회사는 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  라. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. 정보주체의 권리, 의무 및 그 행사방법</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  가. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 space-y-2">
                  <li>① 개인정보 열람요구</li>
                  <li>② 오류 등이 있을 경우 정정 요구</li>
                  <li>③ 삭제요구</li>
                  <li>④ 처리정지 요구</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">
                  나. 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  다. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  라. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">7. 처리하는 개인정보의 항목</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  가. 회사는 다음의 개인정보 항목을 처리하고 있습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">① 홈페이지에 수집된 개인 정보의 관리</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 space-y-2">
                  <li>필수항목 : 개인정보의 처리 목적, 개인정보파일 현황, 개인정보의 처리 및 보유 기간, 개인정보의 제3자 제공에 관한 사항, 개인정보처리의 위탁에 관한 사항, 정보주체의 권리·의무 및 그 행사 방법에 관한 사항</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">② 기타 항목</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-6 space-y-2">
                  <li>개인정보의 항목, 개인정보의 파기에 관한 사항, 개인정보 보호책임자에 관한 사항, 개인정보 처리방침의 변경에 관한 사항, 개인정보의 안전성 확보조치에 관한 사항</li>
                  <li>선택항목 : 개인정보의 열람청구를 접수·처리하는 부서, 정보주체의 권익침해에 대한 구제방법</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">8. 개인정보의 파기</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">가. 파기절차</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">나. 파기기한</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">다. 파기방법</p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">9. 개인정보의 안전성 확보 조치</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                </p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-6 space-y-2">
                  <li>가. 개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</li>
                  <li>나. 내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</li>
                  <li>다. 개인정보의 암호화 : 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</li>
                  <li>라. 해킹 등에 대비한 기술적 대책 : 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</li>
                  <li>마. 개인정보에 대한 접근 제한 : 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</li>
                  <li>바. 접속기록의 보관 및 위변조 방지 : 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.</li>
                  <li>사. 문서보안을 위한 잠금장치 사용 : 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</li>
                  <li>아. 비인가자에 대한 출입 통제 : 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">10. 개인정보 보호책임자</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  가. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-slate-800 mb-2">▶ 개인정보 보호 담당부서 / 책임자</p>
                  <ul className="list-none text-slate-700 leading-relaxed space-y-1">
                    <li>① 부서명 : 경영관리팀</li>
                    <li>② 담당자 : 강완(wan.kang@nanovique.com)</li>
                    <li>③ 직급 : 이사</li>
                    <li>④ 연락처 : 0505-674-5156</li>
                  </ul>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  나. 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">11. 개인정보 처리방침 변경</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>

                <div className="bg-brand/10 p-6 rounded-lg mt-8">
                  <p className="text-slate-800 font-semibold text-center">
                    ○ 본 방침은 2025년 11월 20일부터 시행됩니다.
                  </p>
                </div>
              </>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                Privacy Policy content in English will be available soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
