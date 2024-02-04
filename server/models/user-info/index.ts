import query from "../../mysql/index";



async function getUser(uid: number) {
  try {
    const sql = `select * from duck.user where uid=${uid}`;
    const result: any = await query(sql);
    return result.length === 0 ? null : result[0];
  } catch (error) {
    console.log(error, "getUser");
  }
}

async function getAllUser() {
  try {
    const sql = `select * from users`;
    const result: any = await query(sql);

    console.log(`🍍🙏🍍👉: result`, result);
    return result.length === 0 ? null : result;
  } catch (error) {
    console.log(error, "getAllUser");
  }
}

const createUser = async (userInfo: any) => {
  try {
    console.log(`🍍🙏🍍👉: userInfo`, userInfo);

    const { email, password } = userInfo;
    const sql = `insert into users (email, password) values ('${email}', '${password}')`;
    const result: any = await query(sql);

    console.log(`🍍🙏🍍👉: result`, result);
    return result;
  } catch (error) {
    console.log(error, "createUser");
  }
};

export { getUser, getAllUser, createUser };
