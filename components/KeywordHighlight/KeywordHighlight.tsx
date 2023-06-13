interface PropsType {
  text: string;
  keyword: string;
}
/**
 * 자동완성 텍스트에서 키워드 하이라이트
 */
const KeywordHighlight = ({ text, keyword }: PropsType) => {
  const keywordIndex = text.indexOf(keyword);
  const prefix = text.substring(0, keywordIndex);
  const suffix = text.substring(keywordIndex + keyword.length, text.length);
  return (
    <>
      {prefix}
      <span className="point">{keyword}</span>
      {suffix}
    </>
  );
};
export default KeywordHighlight;
