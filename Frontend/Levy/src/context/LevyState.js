import { useState } from "react";
import LevyContext from './LevyContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.55';
    const [recentExpenses, setRecentExpenses] = useState([])
    const [allExpenses, setAllExpenses] = useState([])
    const [expenseDetail, setExpenseDetail] = useState({})
    const [monthlyExpenses, setMonthlyExpenses] = useState([])
    const [todayTotalExpense, setTodayTotalExpense] = useState(0)
    const [monthlyTotalExpense, setMonthlyTotalExpense] = useState(0)
    const [monthlyCategoryExpense, setMonthlyCategoryExpense] = useState([])

    const categoryData = {
        Food: {
            color: "#c4e6ff",
            image: require('../../assets/images/foodIcon.png')
        },
        Transport: {
            color: "#fff7d6",
            image: require('../../assets/images/transportIcon.png')
        },
        Rent: {
            color: "#a4f19c",
            image: require('../../assets/images/rentIcon.png')
        },
        Bill: {
            color: "#c4defd",
            image: require('../../assets/images/billIcon.png')
        },
        Shopping: {
            color: "#ffc2c8",
            image: require('../../assets/images/shoppingIcon.png')
        },
        Investment: {
            color: "#ffeba8",
            image: require('../../assets/images/investmentIcon.png')
        },
        Personal: {
            color: "#cfffe8",
            image: require('../../assets/images/personalIcon.png')
        },
        Miscellaneous: {
            color: "#dedede",
            image: require('../../assets/images/miscellaneousIcon.png')
        }
    };



    const getRecentExpenses = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchRecentExpenses`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success && json.recentExpenses) {
                    setRecentExpenses(json.recentExpenses)
                }
            }

        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }
    const getAllExpenses = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchAllExpenses`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success && json.expenses) {
                    setAllExpenses(json.expenses)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }

    const getExpenseDetail = async (id) => {
        setIsLoading(true)
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchExpenseDetail/?id=${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    setExpenseDetail(json.expense)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
        setIsLoading(false);
    }

    const deleteExpense = async (id) => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/deleteExpense/?id=${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
        setIsLoading(false);
    }

    const getTotalTodayExpense = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/todayTotalExpense`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    setTodayTotalExpense(json.totalExpense)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }

    const getTotalMonthlyExpense = async (params) => {
        try {
            const token = await AsyncStorage.getItem("token");
            const month = params.month.toString();
            const year = params.year.toString()
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchTotalMonthlyExpense?year=${year}&month=${month}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    setMonthlyTotalExpense(json.totalExpense)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
    }

    const getTotalMonthlyCategoryExpense = async (params) => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem("token");
            const month = params.month.toString();
            const year = params.year.toString()
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchMonthlyCategoryExpense?year=${year}&month=${month}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    setMonthlyCategoryExpense(json.monthlyCategoryExpenses)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
        setIsLoading(false);
    }


    const getMonthlyExpenses = async (params) => {
        try {
            const token = await AsyncStorage.getItem("token");
            const month = params.month.toString();
            const year = params.year.toString()
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchMonthlyExpenses?year=${year}&month=${month}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success) {
                    const entries = Object.entries(json.expensesByDate);
                    setMonthlyExpenses(entries)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
    }

    




    return (
        <LevyContext.Provider value={{
            isLoading,
            ipTemp,
            user,
            recentExpenses,
            categoryData,
            todayTotalExpense,
            allExpenses,
            monthlyTotalExpense,
            monthlyExpenses,
            expenseDetail,
            monthlyCategoryExpense,
            getTotalMonthlyCategoryExpense,
            deleteExpense,
            getExpenseDetail,
            getMonthlyExpenses,
            getTotalMonthlyExpense,
            getTotalTodayExpense,
            getAllExpenses,
            setIsLoading,
            setUser,
            getRecentExpenses
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;