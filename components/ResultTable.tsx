import React, { useEffect, useState } from "react";

interface Result {
  dayOfWeek: string;
  results: Record<string, number | null>;
}

type ResultsMap = Record<string, Result>;

interface ResultTableProps {
  isAdmin: boolean;
  gameName: string;
  chartType: string;
}

const formatDate = (date: Date): string => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const ResultTable: React.FC<ResultTableProps> = ({
  isAdmin,
  gameName,
  chartType,
}) => {
  const today = new Date();
  const lastTwoMonths = new Date(today.getFullYear(), today.getMonth() - 4, 1);

  const isJodiChart = chartType == "JODI CHART" ? true : false;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `/api/getChartData?gameName=${gameName}&chartType=${chartType}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to get game data");
        }

        const resultData = await response.json();
        // console.log("resultData", resultData.table);

        // Convert the resultData array to the ResultsMap structure
        const formattedResults: ResultsMap = {};

        resultData.table.forEach((result: any) => {
          const formattedDate = formatDate(new Date(result.date));

          if (!(formattedDate in formattedResults)) {
            formattedResults[formattedDate] = {
              dayOfWeek: result.dayOfWeek,
              results: {},
            };
          }

          formattedResults[formattedDate].results[result.dayOfWeek] =
            result.value !== null ? parseInt(result.value, 10) : null;
        });

        setResults((prevResults) => ({
          ...prevResults,
          ...formattedResults,
        }));

        // console.log("formattedResults", formattedResults);
      } catch (error) {
        console.error("Error getting game data:", error);
      }
    };

    fetchResults();
  }, [gameName, chartType]);

  const generateInitialResults = (
    startDate: string,
    endDate: string,
    interval: number
  ): ResultsMap => {
    const initialResults: ResultsMap = {};

    const findNearestMonday = (date: Date): Date => {
      const dayOfWeek = date.getDay();
      const daysUntilMonday = (7 - dayOfWeek + 1) % 7; // +1 to adjust for Sunday being 0
      const adjustedDate = new Date(date);
      adjustedDate.setDate(date.getDate() + daysUntilMonday);
      return adjustedDate;
    };

    let currentDate = findNearestMonday(new Date(startDate));

    while (currentDate <= new Date(endDate)) {
      const formattedDate = formatDate(currentDate);
      const dayOfWeek = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(currentDate);
      initialResults[formattedDate] = { dayOfWeek, results: {} };

      // Move to the next date with the specified interval (default is 6 days)
      currentDate.setDate(currentDate.getDate() + interval);
    }

    return initialResults;
  };

  const [results, setResults] = useState<ResultsMap>(() =>
    generateInitialResults(formatDate(lastTwoMonths), formatDate(today), 7)
  );

  console.log("results", results);

  const handleResultChange = (
    date: string,
    dayOfWeek: string,
    newValue: number | null
  ) => {
    setResults((prevResults) => ({
      ...prevResults,
      [date]: {
        ...prevResults[date],
        results: {
          ...prevResults[date].results,
          [dayOfWeek]: newValue,
        },
      },
    }));
  };

  const renderPanelChartInput = (dayValue: number | null): JSX.Element => {
    if (dayValue === null) {
      return <></>;
    }

    const valueString = addZeroPadding(dayValue, 8);

    return (
      <>
        <div style={{ display: "flex", padding: "5px", marginInline: "5px" }}>
          {chartType == "PANEL CHART" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginInline: "5px",
              }}
            >
              {valueString
                .substring(0, 3)
                .split("")
                .map((digit, index) => (
                  <div key={index}>{digit}</div>
                ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "30px",
              marginInline: "5px",
              color: valueString[2] === valueString[3] && chartType == 'JODI CHART' ? "red" : "inherit",
            }}
          >
            {valueString.substring(3, 5)}
          </div>

          {chartType == "PANEL CHART" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginInline: "5px",
              }}
            >
              {valueString
                .substring(5)
                .split("")
                .map((digit, index) => (
                  <div key={index}>{digit}</div>
                ))}
            </div>
          )}
        </div>
      </>
    );
  };

  function addZeroPadding(num: number | undefined, len: number): string {
    if (num === undefined) {
      return "";
    }
    console.log("num", num);
    const numString = num?.toString();
    const currentLength = numString?.length;

    if (currentLength >= len) {
      return numString;
    }

    const padding = "0".repeat(len - currentLength);

    return padding + numString;
  }

  const handleButtonClick = async (date: string, dayOfWeek: string) => {
    const value = String(results[date].results[dayOfWeek]);
    console.log(`Value for ${date} - ${dayOfWeek}: ${value}`);

    try {
      const formData = {
        gameName,
        chartType,
        date,
        dayOfWeek,
        value,
      };
      const queryString = new URLSearchParams(formData).toString();

      const response = await fetch(`/api/updateChart?${queryString}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update table");
      }

      console.log("Table Updated successfully!");
    } catch (error) {
      console.error("Error Updating Table:", error);
    }
  };

  const renderDateRange = (startDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(end.getDate() + 6); // 7 days later

    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-in",
      options
    )} - ${end.toLocaleDateString("en-in", options)}`;
  };

  return (
    <div style={{ display:"flex",justifyContent:"center",overflow:"auto" }}>
      <table border="1" className="bg">
        <thead>
          <tr style={{ fontSize: "20px" }}>
            <th>Date Range</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results)
            .reverse()
            .map(([startDate, { dayOfWeek, results: dayResults }]) => (
              <tr key={startDate}>
                <td>{renderDateRange(startDate)}</td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Mon)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Mon !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Mon, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Mon, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Mon",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(String(dayResults?.Mon) ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Mon")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Tue)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Tue !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Tue, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Tue, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Tue",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Mon?.toString())
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Tue")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Wed)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Wed !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Wed, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Wed, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Wed",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Wed?.toString() ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Wed")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Thu)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Thu !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Thu, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Thu, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Thu",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Thu?.toString() ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Thu")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Fri)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Fri !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Fri, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Fri, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Fri",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Fri?.toString() ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Fri")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Sat)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Sat !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Sat, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Sat, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Sat",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Sat?.toString() ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Sat")}>
                      Get Value
                    </button>
                  )}
                </td>
                <td>
                  {!isAdmin ? (
                    renderPanelChartInput(dayResults.Sun)
                  ) : (
                    <input
                      type="number"
                      value={
                        dayResults.Sun !== undefined
                          ? chartType === "JODI CHART"
                            ? addZeroPadding(dayResults.Sun, 2)
                            : chartType === "PANEL CHART"
                            ? addZeroPadding(dayResults.Sun, 8)
                            : ""
                          : ""
                      }
                      onChange={(e) =>
                        handleResultChange(
                          startDate,
                          "Sun",
                          e.target.value !== ""
                            ? parseInt(e.target.value, 10)
                            : null
                        )
                      }
                      disabled={!isAdmin}
                      style={{
                        fontSize: "30px",
                        color:
                          isJodiChart &&
                          /(\d)\1/.test(dayResults.Sun?.toString() ?? "")
                            ? "red"
                            : "black",
                      }}
                    />
                  )}
                  {isAdmin && (
                    <button onClick={() => handleButtonClick(startDate, "Sun")}>
                      Get Value
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
