import styles from './countries.module.css';
import { Link } from 'react-router-dom';
import Countries from '../../common/api/countriesApi/../countriesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoBtn from '../shareSNS/kakaoShareButton';
import FacebookBtn from '../shareSNS/facebookShareButton';
import TwitterBtn from '../shareSNS/twitterShareButton';

const Profile = ({ match }) => {
    const url = window.location.href;
    const { countryName } = match.params;
    const nation = Countries[countryName];

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    const copyAlert = () => {
        alert('링크 복사완료!');
    };
    return (
        <>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div>
                        <center>
                            <img
                                    src="/img/FelizLogo.png" height={100}
                                    className={styles.birds}
                                />
                        </center>
                    </div>
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />
                    <div className={styles.result__type}>
                        <h1 className={styles.result__city}>
                            {nation.subject}
                        </h1>
                        <br />
                    </div>
                    <div className={styles.reust__title}>
                        <h2>{nation.id}의 여행특징은?</h2>
                    </div>
                    <ul className={styles.result__style__wrapper}>
                        {nation.description.map((item) => {
                            return (
                                <li
                                    className={styles.result__style__detail}
                                    key={item.des}
                                >
                                    {item.des}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.result__advice__box}>
                        <div className={styles.result__advice}>
                            <a href={`${/result/}${nation.car[0].subhead}`}>
                                <img
                                    src={nation.car[0].img}
                                    alt="mbti캐릭터"
                                    Link="/"
                                />
                            </a>
                            <div>
                                <h4>이 여행지에 어울리는 차량은?</h4>
                                <p className={styles.advice__strong}>
                                    바로바로 {nation.car[0].subhead}!
                                </p>
                                <p>{nation.car[0].des}</p>
                            </div>
                        </div>
                        <div className={styles.result__advice}>
                            <a href={`${/result/}${nation.duo[0].subhead}`}>
                                <img
                                    src={nation.duo[0].img}
                                    alt="mbti캐릭터"
                                    Link="/"
                                />
                            </a>
                            <div>
                                <h4>함께하면 좋아요!</h4>
                                <p className={styles.advice__strong}>
                                    찰떡궁합 그 자체 {nation.duo[0].subhead}
                                </p>
                                <p>{nation.duo[0].des}</p>
                            </div>
                        </div>
                        <div className={styles.result__advice}>
                            <Link
                                to={`${/result/}${nation.counter[0].subhead}`}
                            >
                                <img
                                    src={nation.counter[0].img}
                                    alt="mbti캐릭터"
                                />
                            </Link>

                            <div>
                                <h4>가능하면 피하는게 좋겠어요!</h4>
                                <p className={styles.advice__strong}>
                                    도망가세요 {nation.counter[0].subhead}
                                </p>
                                <p>{nation.counter[0].des}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shareBox}>
                        <KakaoBtn />
                        <FacebookBtn />
                        <TwitterBtn />
                    </div>
                    <div className={styles.button__box}>
                        <a href="https://kr.mini.co.kr/subscribe/4229" className={styles.button}>
                            상담신청
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </a>
                        <Link to="/" className={styles.button}>
                            다시하기
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </Link>
                        <CopyToClipboard text={url}>
                            <button
                                className={styles.copy__button}
                                onClick={copyAlert}
                            >
                                링크복사
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    className={styles.icon}
                                />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
