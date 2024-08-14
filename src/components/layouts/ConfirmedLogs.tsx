export default function ConfirmedLogs() {
  return (
    <section>
      <h2>マージ</h2>
      <section>
        <h3>日にちごと</h3>
        <p>過去30日分だけ表示されます。</p>
        <table>
          <caption>2024/8/13</caption>
          <tbody>
            <tr>
              <th>運動</th>
              <td>1時間</td>
            </tr>
            <tr>
              <th>語学学習</th>
              <td>1時間30分</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>2024/8/12</caption>
          <tbody>
            <tr>
              <th>運動</th>
              <td>30分</td>
            </tr>
            <tr>
              <th>読書</th>
              <td>30分</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>月ごと</h3>
        <p>過去12ヶ月分だけ表示されます。</p>
        <table>
          <caption>2024/7</caption>
          <tbody>
            <tr>
              <th>運動</th>
              <td>10時間30分</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>年ごと</h3>
        <table>
          <caption>2024</caption>
          <tbody>
            <tr>
              <th>運動</th>
              <td>100時間30分</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
