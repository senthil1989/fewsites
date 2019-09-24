import React from 'react';
import CommonTitle from '../components/title';
import Imgfunction from '../common/images';

export default function NoticeTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <>
      <div>
        <CommonTitle title={"Notice"} />
      </div>
      <div>{Imgfunction("noticebanner")}</div>
      <div class="vecGreet">
        <div class="notice">
          <div class="searchBtn">
            <form action="noticeList.php?page=1currentFun=search" method="post">
              <button type="submit" value="submit">
              {Imgfunction("search")}
              </button>
              <input type="text" name="name" id="name" placeholder="Search" />
            </form>
          </div>
          <div class="pane-vScroll">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    No<span></span>
                  </th>
                  <th>
                    Title<span></span>
                  </th>
                  <th>
                    Writer<span></span>
                  </th>
                  <th>
                    Date<span></span>
                  </th>
                  <th>
                    View<span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href="noticeDetail.php?id=59">
                      세미콘 타이완 2017(SEMICON Taiwan 2017)을 가다
                    </a>
                  </td>
                  <td>admin</td>
                  <td>2019/08/12</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a href="noticeDetail.php?id=58">
                      한국산업특수가스협회 회원사 등록
                    </a>
                  </td>
                  <td>admin</td>
                  <td>2019/08/12</td>
                  <td>3</td>
                </tr>{" "}
              </tbody>
            </table>
          </div>
          <center></center>
        </div>
      </div>
    </>
  );
}

{/* <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    /> */}
