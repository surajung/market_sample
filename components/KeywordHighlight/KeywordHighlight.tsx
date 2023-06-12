interface PropsType {
  text: string;
  keyword: string;
}
const KeywordHighlight = ({ text, keyword }: PropsType) => {
  // 키워드 위치
  const keywordIndex = text.indexOf(keyword);
  const result1 = text.substring(0, keywordIndex);
  const result2 = text.substring(keywordIndex + keyword.length, text.length);
  return (
    <>
      {result1}
      <span className="point">{keyword}</span>
      {result2}
    </>
  );
};
export default KeywordHighlight;
