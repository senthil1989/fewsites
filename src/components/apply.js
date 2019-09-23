import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CommonTitle from '../components/title';
import Imgfunction from '../common/images';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '40px',
    borderTop: '2px solid #3d3939'
  },
  mobtextField:{
    marginLeft: '30px',
    marginRight: theme.spacing(1),
    width:'100px',
  },
  textField: {
    marginLeft: '30px',
    marginRight: theme.spacing(1),
  },
  textareaField:{
    marginLeft: '30px',
    marginRight: theme.spacing(1),
    display: 'block',
    width: '70%',
    marginTop: '16px',
    marginBottom: '16px',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor:' #fff',
    backgroundImage: 'none',
    backgroundClip: 'padding-box',
    border:' 1px solid #ced4da',
    borderRadius:' .25rem',
    transition:' border-color ease-in-out .15s,box-shadow ease-in-out .15s',
  },
  chooseField:{
    marginTop: '16px',
    marginBottom: '16px',
    marginLeft: '30px',
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: '8px',
    padding: '30px 90px',
    backgroundColor: '#f4f4f4',
    color: '#a29b9b',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  }
}));

 function AppylForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
      <>
      <div>
         <CommonTitle title={"Apply"}/>
       </div>
       <div>
           {Imgfunction("recruit")}
       </div>
    <form className={classes.container} noValidate autoComplete="off">
      <div className="formrow">
      <div className="formlabel"><span>Name</span></div>
      <TextField
        id="outlined-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': '' }}
      />
      </div>
      <div className="formrow">
      <div className="formlabel"><span>Contact</span></div>
      <TextField
        id="outlined-bare"
        className={classes.mobtextField}
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': '' }}
      />
      <TextField
        id="outlined-bare"
        className={classes.mobtextField}
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
      <TextField
        id="outlined-bare"
        className={classes.mobtextField}
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
      </div>
      <div className="formrow">
      <div className="formlabel"><span>E-mail</span></div>
      <TextField
        id="outlined-bare"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
      </div>
      <div className="formrow">
      <div className="formlabel"><span>Contents</span></div>
      <TextareaAutosize className={classes.textareaField} aria-label="minimum height" rows={9} placeholder="Minimum 3 rows" />;
      </div>
      <div className="formrow">
      <div className="formlabel"><span>Attachment</span></div>
      <input
        accept="image/*"
        className={classes.chooseField}
        id="text-button-file"
        multiple
        type="file"
      />
      </div>
      <div class="para">
        <div>
          <div>
             <h1>개인정보처리방침</h1>
           </div>
        </div>                            
        <div class="private">
          <div>
              <p>주식회사퓨엠(이하 ‘회사'라 함)은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                  회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                  ○ 본 방침은부터 2019년 1월 1일부터 시행됩니다.</p>
          </div>
          <div>
              <h2>제1조 개인정보 수집 항목</h2>
              <p>회사의 홈페이지는 다음의 개인정보를 수집하고 있습니다.</p>
              <p><span></span>온라인문의 : 이름, E-Mail, 연락처</p>
              <p><span></span>채용 : 성명, 주민등록번호, 사진, 비밀번호, 자택 주소, 자택 전화번호, 휴대전화 번호, 이메일, 학력, 병역, 어학 능력, 컴퓨터 능력, 자격사항, 가족관계, 경력</p>
          </div>
                                        <div>
                                            <h2>제2조 개인정보 수집 및 이용 목적</h2>

                                            <p><span>1.</span>고객문의 – 문의 및 상담</p>
                                            <p><span>2.</span>입사지원</p>
                                            <p><span>-</span>입사전형 진행, 입사지원서 수정, 합격여부 확인, 입사지원자와의 연락, 채용자격 요건 확인</p>
                                            <p><span>-</span>급여 지급, 복리후생 제공, 각종 업무수행 지원 및 평가 등 인사관리</p>
                                        </div>
                                        <div>
                                            <h2>제3조 개인정보 보유 및 이용기간</h2>

                                            <p>수집되는 개인정보 중 이용목적을 달성한 경우 해당 정보를 지체 없이 파기하며, ‘회사’ 내부 방침 또는 정보주체로부터 개인정보 수집 시 동의 받은 개인정보 보유/이용기간, 관련법령의 규정 내에서 개인정보를 처리/보유합니다. 일정기간 동안 보존해야 하는 정보에 대해 아래와 같은 사유로 인하여 보존하고 있습니다. </p>
                                            <p>[고객문의]</p>
                                            <p>보유 항목 : 성명, 이메일, 연락처</p>
                                            <p>-보유 기간 : 지원 서비스 종료 시까지 보유.
                                                다만, 법령에 특별한 규정이 있을 경우 관계 법령에 따라 보관</p>
                                            <p>-보유 이유 : 서비스의 질 향상 및 협력업체 업무 지원</p>
                                            <p>[채용 관련]</p>
                                            <p>-보유 항목 : 성명, 비밀번호, 생년월일, 성별, 주민등록번호, 자택 주소, 자택 전화번호, 휴대전화 번호, 취미, 특기, 학력, 경력, 어학 능력, 병역사항, 가족사항</p>
                                            <p>-보유 기간 : 근로관계 종료시까지 보유</p>
                                            <p>다만, 동의를 받은경우 보유기간을 연장 할 수 있습니다.</p>
                                            <p>-보유 이유 : 급여 지급, 복리후생 제공, 각종 업무수행 지원 및 평가 등 인사관리</p>
                                            <p>-다만, 채용되지 아니한 입사지원자의 개인정보는 채용절차 완료 후 지체 없이 파기합니다.</p>
                                        </div>
                                        <div>
                                            <h2>제4조 개인정보를 제공하지 않을 경우 불이익</h2>
                                            <p>정보주체는 필수 수집항목을 제공하지 않을 경우 회사 홈페이지에서 ’온라인문의’, ‘채용’ 서비스를 이용하실 수 없습니다.</p>
                                        </div>
                                        <div>
                                            <h2>제5조 개인정보의 파기절차 및 방법</h2>
                                            <p>가. 파기 절차</p>
                                            <p>회사는 수집한 개인정보의 처리목적이 달성되거나 그 보유기간이 종료되는 경우 정보주체의 동의, 이용약관, 관련 법령에 따라 보관이 필요한 경우를 제외하고 해당 정보를 지체 없이 파기합니다.</p>
                                            <p>나. 파기 방법</p>
                                            <p>-전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                                            <p>-종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
                                        </div>
                                        <div>
                                            <h2>제6조 개인정보의 제3자 제공</h2>
                                            <p>‘회사’는 개인정보를 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 기타 법에 의해 요구되는 경우는 예외로 합니다. (예. 관련법령에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)</p>
                                        </div>
                                        <div class="privatetable1">
                                            <h2>제7조 개인정보 처리의 위탁</h2>
                                            <p>‘회사’는 원칙적으로 이용자의 동의 없이 개인정보의 처리 및 제3자에게 수탁하지 않으며, 서비스 향상을 위해 수탁할 경우 관계법령에 따라 수탁계약 시 개인정보가 안전하게 처리 될 수 있도록 관리/감독하고 있습니다.</p>
                                            <p>또한, 제3자에게 개인정보의 처리 업무를 수탁하는 경우에는 수탁 업무의 내용과 수탁자를 회사 홈페이지에 공지 합니다.</p>
                                            <table>
                                                <tbody><tr>
                                                        <td>수탁업체</td>
                                                        <td>수탁업무</td>
                                                        <td>취급정보</td>
                                                        <td>위탁기간</td>
                                                    </tr>
                                                    <tr>
                                                        <td>주식회사 퓨엠</td>
                                                        <td>홈페이지 운영 및 관리</td>
                                                        <td>홈페이지 서비스를 통해 수집되는 정보</td>
                                                        <td>1년</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div>
                                            <h2>제8조 정보주체의 권리, 의무 및 그 행사방법</h2>
                                            <p><span>1.</span>정보주체는 회사 홈페이지에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. </p>
                                            <div class="privacyhole">
                                                <p><span></span>개인정보 열람요구</p>
                                                <p><span></span>오류 등이 있을 경우 정정 요구</p>
                                                <p><span></span>삭제요구</p>
                                                <p><span></span>처리정지 요구</p>
                                            </div>
                                            <p><span>2.</span>제1항에 따른 권리 행사 회사 홈페이지에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
                                            <p><span>3.</span>정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나
                                                제공하지 않습니다.</p>
                                            <p><span>4.</span>제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
                                        </div>
                                        <div>
                                            <h2>제9조 개인정보의 안전성 확보조치</h2>
                                            <p>‘회사’는 수집한 개인정보의 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.</p>
                                            <p><span>1.</span>  관리적 조치 : 내부관리계획 수립/시행, 정기적 직원 교육 등</p>
                                            <p><span>2.</span>  기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치 등</p>
                                            <p><span>3.</span>  물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
                                        </div>
                                        <div class="privatetable2">
                                            <h2>제10조 개인정보 보호 책임자</h2>
                                            <p><span>1.</span>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 담당자를 지정하고 있습니다.</p>
                                            <h2>제10조 개인정보 보호 책임자를 구분, 부서명, 성명/직위, 전화, 이메일로 나타낸 표</h2>
                                            <table>
                                                <tbody><tr>
                                                        <td>구분 </td>
                                                        <td>부서명 성명/직위</td>
                                                        <td>전화</td>
                                                        <td>이메일</td>
                                                    </tr>
                                                    <tr>
                                                        <td>개인정보보호 담당자</td>
                                                        <td>인사총무팀 여진옥/팀장</td>
                                                        <td>031-221-6782</td>
                                                        <td>Joyeo@fewm.co.kr</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div>
                                            <h2>제11조 권익침해 구제방법</h2>
                                            <p>정보주체는 아래의 기관에 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
                                            <p>[아래의 기관은 ‘회사’와는 별개의 기관으로서, ‘회사’의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다] </p>
                                            <p><span></span>개인분쟁조정위원회 (http://privacy.kisa.or.kr 전화번호: 118)</p>
                                            <p><span></span>개인정보침해신고센터 (http://www.privacy.go.kr 전화번호: 118)</p>
                                            <p><span></span>정보보호마크인증위원회 (http://www.eprivacy.or.kr 전화번호: 02-580-0533~4)</p>
                                            <p><span></span>대검찰청 인터넷범죄수사센터 (http://www.spo.go.kr 전화번호: 02-3480-3600)</p>
                                            <p><span></span>경찰청 사이버테러대응센터 (http://www.ctrc.go.kr 전화번호: 02-392-0330)</p>
                                        </div>
                                        <div>
                                            <h2>제12조 (개인정보 처리방침 변경)</h2>
                                            <p><span>1.</span>개인정보처리방침은 2019년 1월 1일부터 적용됩니다.</p>
                                            <p><span>2.</span>현 개인정보 처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 10일전부터 홈페이지의 ‘공지사항’을 통해 고지할 것 입니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkbtn"><FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" /></div>
                                <div className="checkbtn"><Button variant="contained" className={classes.button}> SEND
      </Button></div>
                                
       
    </form>
    </>
  );
}
export default AppylForm;