interface PropsType {
  text: string;
  keyword: string;
}
const KeywordHighlight = ({ text, keyword }: PropsType) => {
  /**
   * 자동완성 텍스트에서 키워드 하이라이트
   */
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
