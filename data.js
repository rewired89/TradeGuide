// TradeGuide concept database
// Each concept: id, title, tags, chain[], blurb, detail, memory, examTip, facts[]

const SECTIONS = [

  // ── 1. Markets Foundations ────────────────────────────────────────────────
  {
    id: "markets-foundations",
    icon: "🏛️",
    title: "Markets Foundations",
    subtitle: "What markets are, how they work, and the language everyone uses",
    concepts: [

      {
        id: "what-are-markets",
        title: "What Markets Are",
        tags: ["basics"],
        chain: ["Buyers want assets", "Sellers have assets", "They meet on an exchange", "Price is discovered", "Trade is executed"],
        blurb: "A market is just a place — physical or digital — where buyers and sellers agree on a price and swap something. That's it.",
        detail: `A financial market is any system where buyers and sellers trade assets — stocks, bonds, currencies, commodities, crypto.\n\nThe price you see at any moment is the last agreed price between a willing buyer and a willing seller. Nothing more.\n\n<strong>Why markets exist:</strong>\n• Companies raise money by selling shares (equity markets)\n• Governments borrow money by selling bonds (debt markets)\n• Traders speculate on price movement to profit\n• Businesses hedge against risk (e.g., a farmer locking in a crop price)\n\n<strong>The two sides of every trade:</strong>\n• Long = you own it and want the price to go UP\n• Short = you borrowed it, sold it, and want the price to go DOWN so you can buy it back cheaper\n\n<strong>Key markets:</strong>\n• Equity (stocks): ownership in companies\n• Fixed income (bonds): loans to companies or governments\n• Forex: currencies trading against each other\n• Commodities: oil, gold, wheat, etc.\n• Derivatives: contracts based on the price of something else (options, futures)\n• Crypto: digital assets on blockchains`,
        memory: `Market = a giant auction that never sleeps. You shout "I'll buy for $100!" Someone shouts back "sold!" That negotiation, scaled to millions of people per second, is what sets the price.\n\nLong = betting UP. Short = betting DOWN.`,
        examTip: `The most important thing to understand first: price is determined by supply and demand. More buyers than sellers → price goes up. More sellers than buyers → price goes down. Everything else in trading is built on top of this.`,
        facts: ["Price = last agreed trade", "Long = bet up", "Short = bet down", "Equity = stocks", "Bonds = debt", "Forex = currencies"]
      },

      {
        id: "asset-classes",
        title: "Asset Classes",
        tags: ["basics"],
        chain: ["Capital needs a home", "Different assets = different risk/reward", "Stocks = ownership", "Bonds = lending", "Forex/Crypto = currency"],
        blurb: "The five main buckets everything gets traded in. Each has its own risk level, hours, and behavior.",
        detail: `<strong>Stocks (Equities):</strong>\nA share of ownership in a company. If Apple does well, your Apple shares go up. You can earn through price appreciation and dividends. Higher risk, higher potential return.\n\n<strong>Bonds (Fixed Income):</strong>\nYou lend money to a government or company. They pay you back with interest over time. Lower risk than stocks. Bond prices move INVERSE to interest rates — this trips people up.\n\n<strong>ETFs (Exchange-Traded Funds):</strong>\nA basket of assets that trades like a stock. SPY = an ETF tracking the S&P 500 (500 biggest US companies). Great for diversification without picking individual stocks.\n\n<strong>Forex (Foreign Exchange):</strong>\nCurrencies trading against each other. EUR/USD = euros vs US dollars. Trades 24/5. Biggest market in the world (~$7 trillion/day). Heavily leveraged.\n\n<strong>Crypto:</strong>\nDigital assets on blockchains. Bitcoin, Ethereum, etc. Trades 24/7. Extremely volatile. High risk, high potential reward. Less regulated.\n\n<strong>Commodities:</strong>\nPhysical goods: gold, oil, natural gas, wheat. Often traded via futures contracts. Used for hedging and speculation.`,
        memory: `Think of it as a risk ladder:\nBonds (safer) → ETFs → Stocks → Forex → Commodities → Crypto (wilder)\n\nETF = a sampler platter. Instead of ordering one dish (one stock), you get a taste of 500.`,
        examTip: `Bonds and interest rates move in opposite directions — when rates rise, existing bond prices fall (because new bonds pay more, old ones look worse). This relationship shows up everywhere in macro analysis.`,
        facts: ["Stocks = ownership", "Bonds = lending", "ETF = basket of assets", "Forex = 24/5", "Crypto = 24/7", "Bond price ↑ = rate ↓"]
      },

      {
        id: "how-exchanges-work",
        title: "How Exchanges Work",
        tags: ["basics"],
        chain: ["You place an order", "Broker routes it", "Exchange matches it", "Counterparty found", "Trade settles"],
        blurb: "An exchange is a regulated marketplace that matches buy orders to sell orders. NYSE, NASDAQ, Binance — all do the same core job.",
        detail: `<strong>The order matching engine:</strong>\nEvery exchange runs software that continuously matches buy orders with sell orders. When a buyer's price meets a seller's price — trade happens.\n\n<strong>Key players:</strong>\n• Retail traders: you and me\n• Institutional traders: hedge funds, pension funds, banks\n• Market makers: firms that always offer to buy AND sell, providing liquidity. They profit from the bid-ask spread.\n\n<strong>Order Book:</strong>\nA live list of all pending buy orders (bids) and sell orders (asks) at different price levels. The top of the book is the best available buy price and best available sell price.\n\n<strong>US Stock Exchanges:</strong>\n• NYSE (New York Stock Exchange): oldest, biggest by market cap\n• NASDAQ: tech-heavy, electronic\n• Open 9:30am–4:00pm EST, Mon–Fri\n\n<strong>Settlement:</strong>\nAfter a trade, money and shares don't swap instantly. US stocks settle T+2 (trade date + 2 business days). This is why you can't immediately withdraw all your cash after selling.`,
        memory: `Exchange = a giant matchmaking app for buyers and sellers. Your broker is your "representative" who walks your order onto the floor. The exchange's matching engine is the algorithm that finds your match.\n\nOrder book = a real-time list of everyone's offers. Top of the book = the best current deal.`,
        examTip: `Market makers are crucial — they ensure there's always someone to trade with. They profit from the spread (buying at bid, selling at ask). Without them, you might not be able to execute trades instantly.`,
        facts: ["NYSE = biggest by cap", "NASDAQ = tech-heavy", "T+2 = settlement", "Market maker = liquidity", "Order book = all pending orders", "9:30am–4pm EST"]
      },

      {
        id: "bid-ask-spread",
        title: "Bid, Ask & Spread",
        tags: ["basics"],
        chain: ["Seller posts ask price", "Buyer posts bid price", "Gap between them = spread", "Trade fills when they meet", "Spread = cost of trading"],
        blurb: "The bid is the highest price a buyer will pay. The ask is the lowest price a seller will accept. The gap between them is the spread — and it's a hidden cost every time you trade.",
        detail: `<strong>Example:</strong>\nApple (AAPL) bid: $189.50 | ask: $189.52\nSpread = $0.02\n\nIf you buy at market price, you pay $189.52.\nIf you immediately sell at market price, you get $189.50.\nYou just lost $0.02 per share instantly — that's the spread.\n\n<strong>Why it matters for algo trading:</strong>\nIf your strategy makes $0.01 per share but the spread is $0.02, you're losing money on every single trade. Spread eats your edge.\n\n<strong>Liquid vs illiquid markets:</strong>\n• Liquid (e.g., SPY, AAPL): tiny spreads ($0.01), easy to enter/exit\n• Illiquid (small-cap stocks, low-volume crypto): large spreads, hard to exit\n\n<strong>Bid-ask in crypto:</strong>\nSpreads are wider on smaller exchanges and lesser-known coins. On major pairs (BTC/USD on Coinbase), spreads are tight.\n\n<strong>The spread is not a fee you see — it's baked into execution price.</strong> Brokers also charge commissions on top (though many retail brokers now offer $0 commissions).`,
        memory: `Bid/Ask = a car dealership. The sticker price (ask) is what they want. Your offer (bid) is what you'll pay. The gap is the dealer's profit.\n\nTight spread = liquid market = easy to trade. Wide spread = illiquid = you'll bleed money getting in and out.`,
        examTip: `Every time you execute a market order, you cross the spread. High-frequency traders and algos try to minimize this cost. For a strategy that trades frequently, spread costs compound fast and can turn a profitable idea into a losing one.`,
        facts: ["Bid = buyer's best price", "Ask = seller's best price", "Spread = ask − bid", "Liquid = tight spread", "Market order = pays ask", "Spread is a cost"]
      },

      {
        id: "order-types",
        title: "Order Types",
        tags: ["basics"],
        chain: ["You decide to trade", "Choose order type", "Broker sends to exchange", "Exchange executes or queues it", "Fill confirmed"],
        blurb: "How you tell the market what to do. Market orders fill instantly at any price. Limit orders only fill at your price or better. These are the building blocks of every strategy.",
        detail: `<strong>Market Order:</strong>\nBuy or sell IMMEDIATELY at whatever the current price is. Guaranteed to fill. NOT guaranteed on price. In thin markets, you might pay much more than expected (slippage).\n\n<strong>Limit Order:</strong>\nBuy or sell ONLY at a specific price or better. Guaranteed on price. NOT guaranteed to fill. Goes into the order book as a pending order.\n• Limit Buy: "I'll only buy if the price drops to $185"\n• Limit Sell: "I'll only sell if the price rises to $200"\n\n<strong>Stop Order (Stop-Loss):</strong>\nBecomes a market order when a price is reached. Used to exit losing trades automatically.\n• Stop-Loss Buy: "If price rises above $110, buy immediately" (used when short)\n• Stop-Loss Sell: "If price drops below $90, sell immediately" (used when long)\n\n<strong>Stop-Limit Order:</strong>\nBecomes a LIMIT order (not market) when the stop price is hit. More control, but risks NOT filling if price moves fast.\n\n<strong>Trailing Stop:</strong>\nStop-loss that moves with the price. "Stay 5% below the highest price since I bought." Locks in profits as price rises.\n\n<strong>OCO (One-Cancels-Other):</strong>\nTwo orders placed simultaneously — if one fills, the other is automatically cancelled. Used for take-profit + stop-loss pairs.`,
        memory: `Market order = "just buy it NOW, whatever it costs" — like grabbing something off a shelf without looking at the price.\n\nLimit order = "only buy it if it goes on sale for $X" — patient, price-conscious.\n\nStop-loss = your emergency exit door. You set it before you need it.`,
        examTip: `In algo trading, you almost never use market orders for entries — slippage kills your edge. You use limit orders. But for stop-losses, market orders ensure you GET OUT, even if the price isn't perfect. A stop-limit can fail to fill in a fast crash.`,
        facts: ["Market = instant, any price", "Limit = your price or better", "Stop = triggers at price", "Stop-limit = limit after trigger", "Trailing stop = follows price up", "OCO = both at once"]
      },

      {
        id: "market-participants",
        title: "Who's Actually Trading",
        tags: ["basics"],
        chain: ["Retail trader places order", "Broker routes it", "Institutional algo may take opposite side", "Market maker fills the gap", "Price moves"],
        blurb: "You're not trading against random people — you're often trading against institutions with billion-dollar algorithms. Knowing who the players are changes how you think.",
        detail: `<strong>Retail Traders (you):</strong>\nIndividual traders using platforms like Robinhood, TD Ameritrade, Interactive Brokers. Small size. Usually last to know. Edge comes from discipline, niche strategies, speed.\n\n<strong>Institutional Traders:</strong>\nHedge funds, pension funds, mutual funds, banks. Massive size ($100M+ positions). Move markets when they trade. Use algos to hide order size (slice large orders into small ones).\n\n<strong>Market Makers:</strong>\nFirms (Citadel Securities, Virtu) that always post both bid AND ask. They profit from the spread. They provide liquidity — without them, you'd wait hours to fill an order. They hedge their inventory risk with other instruments.\n\n<strong>High-Frequency Traders (HFT):</strong>\nAlgo firms that trade thousands of times per second. Profit from tiny price differences across venues. Their hardware is co-located physically next to exchange servers to shave microseconds.\n\n<strong>Algo/Quant Traders:</strong>\nUse mathematical models to find and exploit edges. Backtested strategies. Rule-based. No emotion. This is where you're headed.\n\n<strong>Arbitrageurs:</strong>\nExploit price differences between markets. If Apple trades at $189.50 on NYSE and $189.55 on NASDAQ, an arb bot buys one and sells the other instantly.`,
        memory: `The market food chain: HFT and institutions at the top (fastest, most capital). Market makers in the middle (keep things liquid). Retail at the bottom (but with advantages: no AUM constraints, can trade tiny sizes, can be nimble).\n\nYour edge isn't speed or size — it's strategy and discipline.`,
        examTip: `Retail traders actually have one hidden advantage: position size. A hedge fund managing $10B can't quietly buy a small-cap stock without moving the price. You can. Small strategies with good edges work better at small scale.`,
        facts: ["Retail = individual traders", "Institutional = big funds", "Market maker = always both sides", "HFT = microseconds", "Arb = price differences", "Quant = math-based"]
      },

    ]
  },

  // ── 2. Reading the Market ─────────────────────────────────────────────────
  {
    id: "reading-the-market",
    icon: "📊",
    title: "Reading the Market",
    subtitle: "Charts, candlesticks, volume — how to see what price is actually doing",
    concepts: [

      {
        id: "candlestick-charts",
        title: "Candlestick Charts",
        tags: ["analysis"],
        chain: ["Price opens", "Moves up and down", "Closes at end of period", "Candlestick captures all 4 points", "Pattern tells a story"],
        blurb: "Every candle shows four numbers: open, high, low, close. The color tells you which direction price moved. This is the most common chart type in trading.",
        detail: `A candlestick represents price movement over a fixed time period (1 minute, 1 hour, 1 day, etc.).\n\n<strong>The 4 data points:</strong>\n• Open: where price started in this period\n• High: the highest price reached\n• Low: the lowest price reached\n• Close: where price ended\n\n<strong>Anatomy of a candle:</strong>\n• Body: the thick part between open and close\n• Wick / Shadow: thin lines above and below the body showing the high/low\n• Green/White candle: close > open (price went UP)\n• Red/Black candle: close < open (price went DOWN)\n\n<strong>Key single-candle patterns:</strong>\n• Doji: open ≈ close (tiny body) = indecision. Buyers and sellers are equal.\n• Hammer: small body at top, long lower wick = buyers rejected a big drop. Bullish reversal signal.\n• Shooting Star: small body at bottom, long upper wick = sellers rejected a big push up. Bearish reversal signal.\n• Marubozu: candle with no wicks = pure momentum, price moved one way the whole period.\n\n<strong>Multi-candle patterns:</strong>\n• Engulfing: a large candle that fully contains the previous candle's body. Bullish or bearish depending on direction.\n• Morning Star / Evening Star: 3-candle reversal patterns.`,
        memory: `Candlestick = a story in one picture. The body = where most of the action happened. The wicks = where buyers/sellers tried to push and got rejected.\n\nLong lower wick = bulls came back and defended. Long upper wick = bears came back and pushed down.\n\nGreen = bulls won that period. Red = bears won.`,
        examTip: `The wick tells you about REJECTION. A long lower wick on a green candle means: sellers pushed the price way down during the period, but buyers came roaring back to push it even higher. That's bullish conviction. Learn to read wicks — they're often more informative than the body.`,
        facts: ["OHLC = open/high/low/close", "Green = close > open", "Red = close < open", "Wick = rejection zone", "Doji = indecision", "Hammer = bullish reversal"]
      },

      {
        id: "support-resistance",
        title: "Support & Resistance",
        tags: ["analysis"],
        chain: ["Price falls to a level", "Buyers step in", "Price bounces = support", "Price rises to a level", "Sellers step in", "Price reverses = resistance"],
        blurb: "Support is a price floor where buying pressure tends to stop a decline. Resistance is a price ceiling where selling pressure tends to stop a rise. These levels are the most important tool in technical analysis.",
        detail: `<strong>Why these levels exist:</strong>\nAt certain price levels, lots of traders have placed orders (buy orders at support, sell orders at resistance). When price reaches these levels, the accumulated orders create a reaction.\n\nAlso: human psychology. Round numbers ($100, $50, $1000) act as support/resistance because people naturally place orders at round numbers.\n\n<strong>How to identify them:</strong>\n• Look for price levels where price reversed multiple times\n• Horizontal lines at clear bounce points\n• More touches = stronger level\n• The longer ago the level was established, the more traders remember it\n\n<strong>The flip rule — most important concept here:</strong>\nWhen price BREAKS THROUGH a support level, that support often becomes resistance (and vice versa). Called "support becomes resistance" or "role reversal."\n\nExample: price bounces off $50 three times (support), then breaks below it. Now $50 acts as resistance — sellers defend that level from above.\n\n<strong>Dynamic support/resistance:</strong>\nMoving averages (like the 200-day MA) act as dynamic support/resistance — they move with price over time.`,
        memory: `Support = the floor. Resistance = the ceiling.\n\nImagine a ball bouncing inside a room. The floor keeps it from going lower (support). The ceiling keeps it from going higher (resistance). When it breaks through the ceiling, that ceiling becomes the new floor.\n\nMore bounces at a level = more reliable the level is.`,
        examTip: `The role reversal (support becoming resistance, or vice versa) is one of the most useful things in all of technical analysis. When a strong support level breaks, do NOT immediately buy the bounce. Wait — that old support is now a resistance ceiling and sellers will defend it.`,
        facts: ["Support = price floor", "Resistance = price ceiling", "More touches = stronger", "Role reversal after break", "Round numbers = natural S/R", "MA = dynamic S/R"]
      },

      {
        id: "trends",
        title: "Trends & Trend Lines",
        tags: ["analysis"],
        chain: ["Price makes higher highs", "And higher lows", "Uptrend confirmed", "Trend line connects the lows", "Break of trend line = warning"],
        blurb: "The trend is the overall direction price is moving. 'The trend is your friend' is the oldest rule in trading — and the most ignored.",
        detail: `<strong>Three market conditions:</strong>\n• Uptrend: higher highs AND higher lows. Each pullback stays above the previous low.\n• Downtrend: lower highs AND lower lows. Each bounce fails below the previous high.\n• Sideways (ranging): price bounces between support and resistance with no clear direction.\n\n<strong>Drawing a trend line:</strong>\n• Uptrend line: connect at least 2 higher lows with a straight line. The third touch confirms it.\n• Downtrend line: connect at least 2 lower highs.\n• The more touches, the more valid the line.\n\n<strong>Trend line break:</strong>\nWhen price closes convincingly below an uptrend line, the trend may be ending. Wait for confirmation (a retest of the broken line from below) before acting.\n\n<strong>Timeframe matters:</strong>\nA stock can be in a downtrend on a daily chart and an uptrend on a 15-minute chart simultaneously. Always identify which timeframe you're trading. Higher timeframe trends take priority.\n\n<strong>DOW Theory — the original framework:</strong>\n• Primary trend: months to years\n• Secondary trend: weeks to months (corrections within the primary)\n• Minor trend: days to weeks (noise within secondary)`,
        memory: `Uptrend = staircase going up. Each step = a higher high. Each landing between steps = a higher low. As long as the lows keep rising, you're in an uptrend.\n\nWhen a step is lower than the previous step's landing — trend is breaking down. That's your first warning.`,
        examTip: `Always trade WITH the trend, not against it. If you're a beginner, only take long trades in uptrends and short trades in downtrends. Going against the trend can be profitable (mean reversion) but requires more skill and discipline.`,
        facts: ["Uptrend = HH + HL", "Downtrend = LH + LL", "Trend line = 2+ points", "3rd touch = confirmation", "Break = potential reversal", "Higher TF = priority"]
      },

      {
        id: "volume",
        title: "Volume",
        tags: ["analysis"],
        chain: ["Price moves", "Volume confirms or denies", "High volume = conviction", "Low volume = weak move", "Divergence = warning signal"],
        blurb: "Volume is the number of shares (or contracts) traded in a period. It tells you whether a price move has real conviction behind it or is just noise.",
        detail: `<strong>The basic rule:</strong>\nPrice moves on HIGH volume = strong, likely to continue.\nPrice moves on LOW volume = weak, likely to reverse or be a fake-out.\n\n<strong>Volume in uptrends:</strong>\nHealthy uptrend: rallies on HIGH volume, pullbacks on LOW volume. Buyers are aggressive going up, sellers are weak on dips.\n\nUnhealthy signal: rallies on low volume, selloffs on high volume. Buyers are losing interest, sellers are getting aggressive.\n\n<strong>Volume spikes:</strong>\nA sudden massive volume spike (3–5x average) often marks a turning point. It means something important happened — a news event, a large institution entering or exiting. High volume at a support/resistance level makes that level much more significant.\n\n<strong>Volume indicators:</strong>\n• OBV (On-Balance Volume): running total — adds volume on up days, subtracts on down days. Rising OBV = buying pressure.\n• Volume Profile: shows the volume traded at each price level. High-volume price levels = important S/R.\n\n<strong>Volume divergence:</strong>\nPrice makes new highs but volume is declining — bearish divergence. Smart money may be distributing (selling into strength).`,
        memory: `Volume = the crowd at the game. A goal celebrated by 80,000 screaming fans (high volume) means something. A goal in an empty stadium (low volume) — who cares?\n\nHigh volume confirms the move. Low volume questions it.`,
        examTip: `Never trust a breakout on low volume. A price breaking above resistance needs volume to confirm it's real. Without volume, it's often a fake breakout — price pops above, then collapses back down, trapping the buyers who chased it.`,
        facts: ["Volume = conviction", "High vol + price up = bullish", "Low vol move = weak", "Spike = important event", "OBV = running vol total", "Divergence = warning"]
      },

      {
        id: "timeframes",
        title: "Timeframes",
        tags: ["analysis"],
        chain: ["Same asset", "Different chart views", "1-min for entries", "Daily for trend", "Weekly for big picture", "Use multiple together"],
        blurb: "A timeframe is the duration each candlestick covers. The same stock looks completely different on a 5-minute vs a daily chart. Knowing which one to use — and when — is a core skill.",
        detail: `<strong>Common timeframes:</strong>\n• 1-minute, 5-minute: day traders, scalpers. Lots of noise.\n• 15-minute, 1-hour: swing traders, short-term. Cleaner signals.\n• 4-hour, Daily: the most used by serious traders. Clean trends.\n• Weekly, Monthly: investors, macro view. Very reliable levels.\n\n<strong>Multi-timeframe analysis (MTF):</strong>\nThe professional approach. Use a higher timeframe for direction/bias, lower timeframe for entry timing.\n\nExample workflow:\n1. Weekly chart: is the overall trend up or down?\n2. Daily chart: identify support/resistance levels and trend direction\n3. 1-hour chart: wait for a setup (pattern, indicator signal)\n4. 15-minute chart: time your entry precisely\n\n<strong>The rule:</strong>\nHigher timeframe always wins. If the daily chart shows a strong downtrend, don't look for long entries on the 5-minute chart — you're fighting the trend.\n\n<strong>For algo trading:</strong>\nYour timeframe determines your holding period and frequency of trades. A 1-minute strategy might trade 50 times a day. A daily strategy might trade 2–3 times a week. Each requires different risk management.`,
        memory: `Think of timeframes like zoom levels on Google Maps. Weekly = satellite view (big picture, where's the country?). Daily = city view (where's the neighborhood?). 1-hour = street view (where exactly do I turn?). You need all three to navigate properly.\n\nAlways zoom out before zooming in.`,
        examTip: `The most common beginner mistake: picking entries on a 5-minute chart while ignoring that the daily chart is in a strong downtrend. You'll find "perfect" buy setups that get destroyed by the larger trend. Check the higher timeframe first — always.`,
        facts: ["1-min = scalping", "Daily = most used", "MTF = multi-timeframe", "Higher TF wins", "Trend on weekly = priority", "TF = holding period"]
      },

      {
        id: "price-action",
        title: "Price Action",
        tags: ["analysis"],
        chain: ["Raw price data only", "No indicators needed", "Read candlestick patterns", "Identify key levels", "Trade the pattern"],
        blurb: "Price action trading means reading the market using only the price chart — no indicators, no moving averages, just candlesticks, levels, and patterns. It's the purest form of market reading.",
        detail: `<strong>What price action traders focus on:</strong>\n• The shape and size of candles\n• Where key support/resistance levels are\n• How price reacts when it reaches those levels\n• What the current trend is\n• Whether momentum is increasing or decreasing\n\n<strong>Key price action concepts:</strong>\n• Pin bar (hammer/shooting star): long wick = rejection of a price level. Actionable reversal signal.\n• Inside bar: a candle that fits entirely within the previous candle. Represents compression — a breakout is coming.\n• Outside bar (engulfing): a candle that engulfs the previous one. Shows a shift in momentum.\n• Consolidation: price moves sideways after a trend. Energy building for the next move.\n• Impulse vs correction: trending moves (impulse) are followed by smaller retracing moves (correction). The trend continues when impulse resumes.\n\n<strong>Why price action works:</strong>\nAll indicators are derived FROM price. Price is the source. By reading price directly, you see the same data faster, without the lag that indicators introduce.\n\n<strong>Limitation:</strong>\nSubjective. Two traders can look at the same chart and see different things. Algos can automate price action but it requires precise rules.`,
        memory: `Price action = learning to read the market's body language. A big red candle after a long uptrend is like someone suddenly crossing their arms and turning away. You don't need an indicator to know the mood changed.\n\nIndicators tell you what already happened. Price tells you what's happening now.`,
        examTip: `For your algo, price action can be expressed as rules: "If the last 3 candles are higher highs AND current candle closes above the last high, enter long." The art is translating what you SEE visually into precise IF/THEN logic a computer can execute.`,
        facts: ["No indicators needed", "Candle shapes matter", "Pin bar = rejection", "Inside bar = compression", "Engulfing = momentum shift", "Impulse then correction"]
      },

    ]
  },


  // ── 3. Technical Analysis ─────────────────────────────────────────────────
  {
    id: "technical-analysis",
    icon: "📉",
    title: "Technical Analysis",
    subtitle: "Indicators, moving averages, and how to read signals from price data",
    concepts: [

      {
        id: "moving-averages",
        title: "Moving Averages",
        tags: ["analysis"],
        chain: ["Raw price data", "Average of last N closes", "Smooths out noise", "Shows trend direction", "Crossovers signal entries"],
        blurb: "A moving average smooths price data into a single line showing the average price over a set period. The most widely used indicator in all of trading.",
        detail: `<strong>Simple Moving Average (SMA):</strong>\nThe average closing price over the last N periods.\nSMA(20) = sum of last 20 closes ÷ 20\nSlower to react, but cleaner.\n\n<strong>Exponential Moving Average (EMA):</strong>\nGives more weight to recent prices. Reacts faster to price changes than SMA. More popular for active trading.\n\n<strong>Key MAs traders watch:</strong>\n• 9 EMA: very short-term momentum\n• 20 EMA: short-term trend\n• 50 SMA: medium-term trend. Frequently acts as support/resistance.\n• 200 SMA: the big one. Long-term trend. Institutions watch this.\n\n<strong>Golden Cross / Death Cross:</strong>\n• Golden Cross: 50 SMA crosses ABOVE 200 SMA → long-term bullish signal\n• Death Cross: 50 SMA crosses BELOW 200 SMA → long-term bearish signal\n\n<strong>EMA crossover strategy (classic):</strong>\nWhen fast EMA (e.g., 9) crosses above slow EMA (e.g., 21) → buy signal.\nWhen fast crosses below slow → sell signal.\nThis is one of the most backtested strategies in history.\n\n<strong>MA as support/resistance:</strong>\nPrice often bounces off the 20 EMA in strong uptrends. The 200 SMA is a massive level — many stocks reverse exactly at this line.`,
        memory: `SMA = simple average, like your high school GPA. EMA = weighted average that cares more about recent grades.\n\nGolden Cross = 50 crosses above 200 = sunshine, bulls are in control.\nDeath Cross = 50 crosses below 200 = storm, bears are in control.\n\n200 SMA = the market's heartbeat line. Price above it = healthy bull. Price below = trouble.`,
        examTip: `MAs are LAGGING indicators — they tell you about the past, not the future. In a choppy, sideways market, MA crossovers generate tons of false signals (whipsaws). They work best in trending markets. Know this before building a crossover strategy.`,
        facts: ["SMA = equal weight", "EMA = recent weight", "50 SMA = medium term", "200 SMA = long term", "Golden cross = bullish", "Death cross = bearish"]
      },

      {
        id: "rsi",
        title: "RSI — Relative Strength Index",
        tags: ["analysis"],
        chain: ["Price closes tracked", "Gains vs losses calculated", "RSI = ratio of average gains to losses", "0–100 scale", "Over 70 = overbought, under 30 = oversold"],
        blurb: "RSI measures how fast and how much price has moved recently. It tells you if a market is overbought (might pull back) or oversold (might bounce). One of the most useful momentum indicators.",
        detail: `RSI = 100 − (100 / (1 + RS))\nRS = average gain over N periods ÷ average loss over N periods\nDefault period: 14\n\n<strong>Reading RSI:</strong>\n• Above 70 = overbought. Price moved up fast. A pullback is possible.\n• Below 30 = oversold. Price dropped fast. A bounce is possible.\n• 50 = neutral midpoint. RSI above 50 = bullish momentum, below 50 = bearish.\n\n<strong>Important: overbought ≠ "sell now"</strong>\nIn a strong uptrend, RSI can stay above 70 for days or weeks. Overbought means "hot" not "dead." The same for oversold in a downtrend.\n\n<strong>RSI Divergence (the most powerful RSI signal):</strong>\n• Bearish divergence: price makes a higher high, but RSI makes a lower high. Momentum is weakening even as price rises. Often precedes a reversal.\n• Bullish divergence: price makes a lower low, but RSI makes a higher low. Sellers are losing steam. Potential bounce coming.\n\n<strong>RSI in algo trading:</strong>\nCommon strategy: buy when RSI crosses back above 30 (from oversold). Sell when it crosses back below 70 (from overbought). Pairs well with trend filters (only take RSI oversold signals in an uptrend).`,
        memory: `RSI = a speedometer for price. 0 = price has only gone down lately. 100 = price has only gone up. 70 = going fast uphill (maybe slow down soon). 30 = going fast downhill (might bottom soon).\n\nDivergence = when the speedometer disagrees with the direction. Price goes higher but the engine is losing power — that's a warning.`,
        examTip: `RSI divergence is more reliable than overbought/oversold signals alone. A stock at RSI 75 in a strong trend is not a sell signal. But if it makes a new high while RSI makes a lower high — that's a real warning that the trend is losing steam.`,
        facts: ["Default = 14 periods", "Over 70 = overbought", "Under 30 = oversold", "50 = midpoint", "Bearish div = HH + LH RSI", "Bullish div = LL + HL RSI"]
      },

      {
        id: "macd",
        title: "MACD",
        tags: ["analysis"],
        chain: ["Fast EMA calculated", "Slow EMA calculated", "Subtract slow from fast = MACD line", "Signal line = EMA of MACD", "Histogram = difference between them"],
        blurb: "MACD shows the relationship between two moving averages. It's a trend-following AND momentum indicator in one — showing both direction and strength.",
        detail: `MACD = Moving Average Convergence Divergence\n\n<strong>The three components:</strong>\n• MACD Line: 12 EMA − 26 EMA. When positive = short-term momentum is stronger than long-term (bullish). When negative = bearish.\n• Signal Line: 9 EMA of the MACD line. Acts as a trigger for buy/sell signals.\n• Histogram: MACD line − Signal line. Shows the gap between them visually. Growing histogram = increasing momentum.\n\n<strong>Trading signals:</strong>\n• Bullish crossover: MACD line crosses ABOVE the signal line → buy signal\n• Bearish crossover: MACD line crosses BELOW the signal line → sell signal\n• Zero line cross: MACD crossing above 0 = trend turning bullish. Below 0 = bearish.\n\n<strong>MACD Divergence:</strong>\nSame as RSI divergence but often gives earlier signals.\n• Price makes new high, MACD histogram makes lower high = bearish divergence\n• Price makes new low, MACD histogram makes higher low = bullish divergence\n\n<strong>Limitation:</strong>\nMACD is a lagging indicator. Crossovers happen after the move has started. In choppy markets, frequent false crossovers occur. Best in trending markets.`,
        memory: `MACD = the gap between two runners (the 12 EMA and 26 EMA sprinters). When the fast runner (12) is pulling ahead = bullish momentum. When the slow runner (26) catches up or takes the lead = momentum fading.\n\nHistogram bars growing = gap widening = strong trend. Bars shrinking = gap narrowing = trend weakening.`,
        examTip: `MACD is most useful for trend confirmation and for spotting divergence early. The histogram is what most traders watch most — when it starts shrinking while price is still moving, that's often the first warning of a coming reversal.`,
        facts: ["12 EMA − 26 EMA", "Signal = 9 EMA of MACD", "Histogram = MACD − signal", "Crossover = signal", "Zero line = trend shift", "Lagging indicator"]
      },

      {
        id: "bollinger-bands",
        title: "Bollinger Bands",
        tags: ["analysis"],
        chain: ["20 SMA calculated", "Standard deviation measured", "Upper band = SMA + 2σ", "Lower band = SMA − 2σ", "Bands expand in volatility, contract in quiet"],
        blurb: "Three bands around price: a middle moving average and two outer bands based on standard deviation. When price touches the outer bands, it's statistically unusual — a potential mean reversion signal.",
        detail: `Created by John Bollinger. Default settings: 20-period SMA with bands at ±2 standard deviations.\n\n<strong>What the bands mean:</strong>\n• Upper band = SMA + (2 × standard deviation): statistically, price is above here ~5% of the time\n• Lower band = SMA − (2 × standard deviation): same, below here ~5% of the time\n• Middle band: the 20 SMA — acts as support/resistance\n\n<strong>The Squeeze:</strong>\nWhen the bands come very close together, volatility has dropped. The market is coiling. A big move is coming — you just don't know which direction. The squeeze is often a setup signal for breakout traders.\n\n<strong>Band walks:</strong>\nIn a strong trend, price can "walk the band" — hugging the upper or lower band for an extended period. This is NOT overbought — it means the trend is extremely strong.\n\n<strong>Mean reversion signals:</strong>\n• Price touches lower band + bullish candle = potential long\n• Price touches upper band + bearish candle = potential short\nWorks best in ranging/sideways markets, NOT in strong trends.\n\n<strong>Bandwidth indicator:</strong>\nMeasures the distance between bands. Low bandwidth = squeeze. High bandwidth = expansion phase.`,
        memory: `Bollinger Bands = a rubber band around price. When price stretches the band far, it tends to snap back (mean reversion). When the band is very tight (squeeze), the rubber band is being stretched and about to release.\n\nBands touching = unusual. Bands squeezing together = big move loading.`,
        examTip: `Bollinger Bands are often misused — beginners think "price at upper band = sell." But in trending markets, price walks the band. The real setup is: price at lower band WITH a bullish reversal candle AND in an uptrend. Context always matters.`,
        facts: ["20 SMA ± 2σ", "95% of closes inside bands", "Squeeze = low volatility", "Band walk = strong trend", "Touch ≠ reversal", "Works best in ranges"]
      },

      {
        id: "indicators-vs-signals",
        title: "Indicators vs Signals",
        tags: ["analysis"],
        chain: ["Indicator calculates from price", "Tells you about past behavior", "Signal = specific trade trigger", "Multiple indicators = confluence", "Entry only when aligned"],
        blurb: "An indicator is a calculation. A signal is a reason to trade. Most beginners confuse the two — they see RSI at 30 and immediately buy. That's not a signal. That's just data.",
        detail: `<strong>An indicator is a tool:</strong>\nRSI, MACD, Bollinger Bands — these are calculations derived from price. They describe what already happened. They do NOT predict the future.\n\n<strong>A signal is a specific rule:</strong>\n"Enter long when: RSI crosses above 30 AND price is above 200 SMA AND the candle closes green."\nThat's a signal — three conditions that must all be true.\n\n<strong>Indicator problems:</strong>\n• Lagging: most indicators react AFTER the move has started\n• Repainting: some indicators change their historical values as new data comes in (dangerous for backtesting)\n• Overfitting: if you add enough indicators, you can make any strategy look good on past data — but it won't work going forward\n\n<strong>Confluence = multiple indicators agreeing:</strong>\nOne indicator → noise. Three indicators pointing the same direction → signal with edge.\n\nExample of confluence:\n• Price at major support level\n• RSI crossing up from oversold\n• MACD bullish crossover\n• Volume spike on the bounce candle\n→ All four agree? That's a high-confidence entry.\n\n<strong>The golden rule:</strong>\nFewer, cleaner rules beat more, complex rules. If you need 8 indicators to confirm an entry, your strategy is too complicated.`,
        memory: `Indicator = the weather forecast. Signal = "take an umbrella today because it's raining AND you're going outside AND you don't have a hood."\n\nOne cloud in the sky (one indicator) doesn't mean carry an umbrella. Three weather apps all saying rain in the next hour (confluence) — now it's a signal.`,
        examTip: `When building algos: every condition you add to a signal filters out more trades. Fewer trades is fine as long as the remaining trades have higher win rates. Don't add conditions just to reduce losses — add them only if they genuinely improve the signal quality in testing.`,
        facts: ["Indicator = past data", "Signal = specific rule", "Confluence = multiple agree", "Lagging = normal for indicators", "Repainting = dangerous", "Fewer rules = better"]
      },

    ]
  },

  // ── 4. Fundamental Analysis ───────────────────────────────────────────────
  {
    id: "fundamental-analysis",
    icon: "📋",
    title: "Fundamental Analysis",
    subtitle: "Earnings, valuation, economic data — what actually drives prices long-term",
    concepts: [

      {
        id: "earnings",
        title: "Earnings Reports",
        tags: ["analysis"],
        chain: ["Company reports quarterly", "Revenue and profit announced", "Compared to analyst estimates", "Beat = price often rises", "Miss = price often drops"],
        blurb: "Four times a year, every public company reports its financial results. These reports move stock prices more than almost anything else.",
        detail: `Public companies report earnings every quarter (Q1/Q2/Q3/Q4). The report includes:\n• Revenue: total sales\n• Earnings Per Share (EPS): profit divided by shares outstanding\n• Guidance: management's forecast for the next quarter\n\n<strong>Beat vs Miss vs Meet:</strong>\nAnalysts forecast what a company should earn. The market prices in those estimates. The reaction is about the SURPRISE relative to expectations:\n• Beat: company earned more than expected → stock typically rises\n• Miss: company earned less → stock typically drops\n• Meet: exactly as expected → small reaction, direction depends on guidance\n\n<strong>"Buy the rumor, sell the news":</strong>\nPrice often moves UP before earnings as traders speculate. Then drops AFTER the announcement — even if earnings were good — because the event is now priced in.\n\n<strong>Earnings surprise:</strong>\nA big beat can cause +10% or +20% moves in a single day. A big miss can cause −20% or worse.\n\n<strong>For algo traders:</strong>\nMost algo strategies AVOID holding positions through earnings — the unpredictable gap risk is too large. You add a filter: "no new positions in the 2 days before earnings date."`,
        memory: `Earnings = a company's report card. But the grade only matters relative to what teachers (analysts) expected. Getting a B when everyone expected a C = celebration. Getting a B when everyone expected an A = disappointment.\n\nThe reaction is always about surprise, not absolute performance.`,
        examTip: `"Buy the rumor, sell the news" is real and quantifiable. Stocks in strong uptrends often pop before earnings and sell off after — even on a beat. For algos, earnings are a risk event to avoid unless you're specifically building an earnings-surprise strategy.`,
        facts: ["Quarterly reports", "EPS = profit/shares", "Beat = above estimates", "Miss = below estimates", "Guidance matters too", "Avoid earnings for algos"]
      },

      {
        id: "pe-ratio",
        title: "P/E Ratio",
        tags: ["analysis"],
        chain: ["Stock price known", "Annual earnings per share known", "Price ÷ EPS = P/E ratio", "Higher P/E = market paying premium", "Compare to peers and history"],
        blurb: "Price-to-Earnings ratio tells you how much investors are paying for each dollar of profit. It's the most common valuation metric in stock markets.",
        detail: `P/E = Stock Price ÷ Earnings Per Share\n\nExample: Stock at $100, EPS of $5 → P/E = 20\nTranslation: investors are paying $20 for every $1 of annual profit.\n\n<strong>What P/E means:</strong>\n• Low P/E (e.g., 8–12): "cheap" or value stock — possibly undervalued, or market expects slow growth\n• High P/E (e.g., 30–50+): "expensive" or growth stock — market expects fast growth\n• Negative P/E: company is losing money (no meaningful P/E)\n\n<strong>Context is everything:</strong>\nA P/E of 25 is high for a utility company but cheap for a tech company growing 40% per year. Always compare within the same industry.\n\n<strong>Trailing vs Forward P/E:</strong>\n• Trailing P/E: uses last 12 months of actual earnings\n• Forward P/E: uses analyst estimates for next 12 months. More useful for growth stocks.\n\n<strong>S&P 500 average P/E historically:</strong>\nAround 15–20. During bull markets, often stretches to 25–30+. During recessions, can drop to 10–12.\n\n<strong>Limitations:</strong>\nP/E is useless for pre-profit companies. Earnings can be manipulated (accounting). P/E doesn't account for growth rate. Use PEG ratio (P/E ÷ growth rate) for a more complete picture.`,
        memory: `P/E = how many years it would take the company's earnings to pay back your investment (if all earnings were returned to you).\n\nP/E of 20 = 20 years at current earnings rate. P/E of 5 = 5 years. Lower = cheaper.\n\nBut growth changes everything — a company growing 50%/year can justify a P/E of 50.`,
        examTip: `For fundamental traders, P/E is a starting point — never a conclusion. A stock with a P/E of 8 might be cheap, or it might be "value trap" (cheap for a reason — the business is declining). Always look at why the P/E is where it is.`,
        facts: ["P/E = price ÷ EPS", "Low P/E = cheap/slow growth", "High P/E = expensive/fast growth", "S&P 500 avg = 15–20", "Forward P/E = estimates", "PEG = P/E ÷ growth"]
      },

      {
        id: "market-cap",
        title: "Market Cap",
        tags: ["analysis"],
        chain: ["Count all shares outstanding", "Multiply by current price", "= Market capitalization", "Determines company size tier", "Affects volatility and liquidity"],
        blurb: "Market cap is the total value the market places on a company. It determines whether a stock is a mega-cap blue chip or a volatile small-cap.",
        detail: `Market Cap = Share Price × Total Shares Outstanding\n\nExample: Apple at $190/share × 15.4 billion shares = ~$2.9 trillion market cap\n\n<strong>Size categories:</strong>\n• Mega-cap: $200B+ (Apple, Microsoft, Amazon)\n• Large-cap: $10B–$200B (Walmart, Boeing)\n• Mid-cap: $2B–$10B\n• Small-cap: $300M–$2B: higher growth potential, higher risk, less liquid\n• Micro-cap: $50M–$300M: very volatile, very thin liquidity\n• Nano-cap: under $50M: extremely speculative\n\n<strong>Why it matters for trading:</strong>\n• Large-caps: tight spreads, high liquidity, easier to trade algorithmically\n• Small-caps: wide spreads, can gap dramatically on news, harder to exit positions\n• Small-caps often have higher returns (and higher losses)\n\n<strong>Market cap vs price:</strong>\nA stock at $5/share isn't "cheap" — it might have billions of shares outstanding and a huge market cap. Don't use stock price alone to judge size.`,
        memory: `Market cap = the price tag on the whole company. If someone wanted to buy 100% of Apple, it would cost ~$3 trillion.\n\nLarge-cap = ocean liner: hard to sink, slow to turn. Small-cap = speedboat: fast, exciting, but can capsize in a storm.`,
        examTip: `For algo trading: stick to large-cap and mid-cap stocks initially. They have the liquidity your strategies need. Small-caps have edge opportunities but slippage, wide spreads, and halts can destroy backtested results in live trading.`,
        facts: ["Cap = price × shares", "Mega-cap = $200B+", "Large = $10B–200B", "Small = $300M–2B", "Small-cap = more volatile", "Cap ≠ price"]
      },

      {
        id: "economic-indicators",
        title: "Economic Indicators",
        tags: ["analysis"],
        chain: ["Government releases data", "Market reacts instantly", "Fed adjusts policy", "Interest rates change", "Everything reprices"],
        blurb: "Macro data releases like jobs reports, inflation, and interest rates move entire markets — not just individual stocks. These are the forces behind the big moves.",
        detail: `<strong>The big three that move markets most:</strong>\n\n<strong>1. Fed Interest Rate Decisions:</strong>\nThe Federal Reserve sets the federal funds rate (the base borrowing cost). Higher rates = expensive to borrow = slows economy = bad for stocks (generally). Lower rates = cheap money = good for stocks.\nWhen the Fed speaks, markets move. Full stop.\n\n<strong>2. Inflation (CPI — Consumer Price Index):</strong>\nMeasures how fast prices are rising. High inflation → Fed raises rates → markets fear slowdown. Low inflation → Fed can cut rates → markets rally.\nReleased monthly. A single CPI print can swing the market 2–3%.\n\n<strong>3. Jobs Report (Non-Farm Payrolls — NFP):</strong>\nReleased first Friday of every month. Shows how many jobs were created. Strong jobs = strong economy = good... but also might mean Fed keeps rates high.\nThe market's reaction to NFP is often counterintuitive.\n\n<strong>Other key indicators:</strong>\n• GDP (Gross Domestic Product): total economic output. Two negative quarters = recession.\n• PMI (Purchasing Managers Index): above 50 = expansion, below 50 = contraction\n• Consumer Confidence: predicts spending\n• Retail Sales: direct measure of consumer spending`,
        memory: `Interest rates = the gravity of financial markets. Low gravity (low rates) = everything floats up (stocks, crypto, real estate). High gravity (high rates) = things fall back to earth.\n\nFed raises rates → money flows from stocks to safer bonds (bonds now pay more). Stocks fall.`,
        examTip: `For algo traders: many strategies include a "macro filter" — don't trade in the 30 minutes before or after a major data release. The unpredictable volatility spike will fill orders at terrible prices and blow up your stats. Schedule these in your calendar.`,
        facts: ["Fed = controls rates", "CPI = inflation", "NFP = first Friday monthly", "GDP < 0 × 2 = recession", "PMI > 50 = expansion", "Rate up = stocks often down"]
      },

      {
        id: "how-news-moves-markets",
        title: "How News Moves Markets",
        tags: ["analysis"],
        chain: ["News event occurs", "Algorithms read headlines in milliseconds", "Price gaps instantly", "Retail traders react minutes later", "New equilibrium found"],
        blurb: "Markets price in news faster than any human can react. By the time you read a headline, the move is usually already done. Understanding this changes how you use news.",
        detail: `<strong>The news reaction timeline:</strong>\n1. News breaks (earnings, FDA approval, merger, economic data)\n2. Algos reading news feeds react in <1 millisecond\n3. Price gaps to a new level\n4. Human traders see the move and react (usually 1–5 minutes later)\n5. Secondary reactions and retracements happen over the next hours\n\n<strong>What this means for you:</strong>\nYou can't compete with HFT algos on immediate news reactions. Don't try. Instead:\n• Trade the secondary reaction (after the dust settles)\n• Look for overreactions that get corrected\n• Use news as context, not as a trading trigger\n\n<strong>Priced in vs not priced in:</strong>\nIf news is "expected" (analyst expected a rate cut, company expected to beat), the move before the announcement is the price being "priced in." The announcement itself might cause little movement — or a sell-off if expectations were too high.\n\n<strong>Catalysts that create opportunity:</strong>\n• Unexpected earnings misses or beats\n• Surprise CEO resignation\n• Unexpected FDA approval/rejection\n• Sudden geopolitical events\n\n<strong>Sentiment vs fundamentals:</strong>\nIn the short term, markets move on SENTIMENT (how people feel). In the long term, price follows fundamentals (actual earnings, growth). Algos can trade both — sentiment analysis using NLP on news feeds is an active research area.`,
        memory: `News = a rock thrown into a pond. The first ripple (instant price move) is the algos. The second ripple (reactions over the next hour) is where retail traders live. The third ripple (following days) is the re-analysis and repositioning.\n\nBy the time you read the headline, you're the third ripple.`,
        examTip: `"Buy the rumor, sell the news" — the second time this appears in this guide, because it's that important. Markets anticipate events. By the time the event is confirmed, it's priced in. For individual stocks, the best opportunities are often after an overreaction — when a good company's stock drops 15% on a minor disappointment.`,
        facts: ["Algos react in <1ms", "Retail = minutes late", "Priced in = already moved", "Secondary reaction = opportunity", "Sentiment = short term", "Fundamentals = long term"]
      },

    ]
  },


  // ── 5. Risk Management ────────────────────────────────────────────────────
  {
    id: "risk-management",
    icon: "🛡️",
    title: "Risk Management",
    subtitle: "The most important section. Protect your capital first — everything else is secondary",
    concepts: [

      {
        id: "position-sizing",
        title: "Position Sizing",
        tags: ["risk"],
        chain: ["Decide max loss per trade", "Calculate stop distance", "Divide to find shares", "Never risk more than defined %", "Size protects you"],
        blurb: "Position sizing is how many shares or contracts you buy. It's the single most important variable in whether you survive long enough to learn trading.",
        detail: `<strong>The 1–2% rule:</strong>\nNever risk more than 1–2% of your total account on a single trade. This isn't optional — it's what keeps you in the game.\n\nExample:\nAccount = $10,000\n1% risk = $100 max loss per trade\nStop-loss = $2 below entry price\nPosition size = $100 ÷ $2 = 50 shares\n\n<strong>The formula:</strong>\nShares = (Account × Risk %) ÷ (Entry Price − Stop Price)\n\n<strong>Why this matters:</strong>\nWith 1% risk, you need 100 consecutive losing trades to lose your entire account. That's survivable.\nWith 10% risk, 10 losing trades = zero. That happens to beginners regularly.\n\n<strong>Kelly Criterion (advanced):</strong>\nA mathematical formula for optimal position sizing based on your win rate and win/loss ratio:\nKelly % = Win Rate − (Loss Rate ÷ Win/Loss Ratio)\nMost professional traders use HALF-Kelly or QUARTER-Kelly to account for estimation errors.\n\n<strong>In practice:</strong>\nFor beginners: use 1% rule. Period. As you prove your strategy works over 100+ trades, you can evaluate adjusting.`,
        memory: `Position sizing = airbags in a car. You don't skip them because you're a good driver. You install them because occasionally things go wrong regardless.\n\n1% risk rule: even if you're wrong 20 times in a row, you still have 82% of your account. You can recover. Risk 10%? Wrong 10 times = zero.`,
        examTip: `The most common reason new traders blow up accounts is NOT a bad strategy — it's oversized positions. A 50% win rate strategy with 2% risk makes money. The same strategy with 20% risk destroys accounts during normal losing streaks.`,
        facts: ["1–2% rule per trade", "Shares = risk $ ÷ stop distance", "Kelly = optimal sizing", "Use half-Kelly in practice", "10 losses ×10% = zero", "Size BEFORE entering"]
      },

      {
        id: "stop-loss",
        title: "Stop-Loss",
        tags: ["risk"],
        chain: ["Enter trade", "Decide max acceptable loss", "Place stop order below entry", "Price drops to stop", "Automatic exit — loss limited"],
        blurb: "A stop-loss is a pre-set order that exits your trade automatically when the loss reaches a level you decided before entering. It's your only protection when you're wrong.",
        detail: `<strong>Why stop-losses are non-negotiable:</strong>\nEvery trader is wrong sometimes — including the best ones. A stop-loss ensures being wrong doesn't destroy your account. Without one, a single trade can wipe out months of gains.\n\n<strong>Where to place stops:</strong>\n• Below a support level (for long trades): if price breaks support, your thesis is wrong\n• Above a resistance level (for short trades)\n• Based on ATR (Average True Range): place stop at 1.5× or 2× ATR below entry to give price room to breathe\n• NOT based on dollar amounts alone ("I'll stop out at -$100") — this ignores market structure\n\n<strong>The mental stop trap:</strong>\n"I don't need a hard stop, I'll just watch it." This fails almost every time. When the loss hits, emotions activate. You think "it'll come back." Sometimes it does. Sometimes the stock drops 80%. Hard stop orders = discipline when emotion wins.\n\n<strong>Stop placement and the bipolar brain:</strong>\nThis section is direct because it matters: impulsive decisions during drawdowns (moving stops, adding to losing positions, "revenge trading") are how accounts get destroyed. An algo with hard-coded stops removes you from this equation entirely. The algorithm doesn't feel fear. It doesn't feel hope. It executes the plan. This is one of the biggest real-world advantages of algorithmic trading for anyone who struggles with emotional regulation.`,
        memory: `Stop-loss = the door handle on a car you've decided is going the wrong way. You planned the exit before you got in. You don't wait until you're going 100mph in the wrong direction to start thinking about it.\n\nHard stop = the algorithm decides. Mental stop = your emotions decide. Trust the algorithm.`,
        examTip: `Common mistake: moving your stop-loss further away because price is approaching it. This is always wrong. You set the stop where your thesis would be proven wrong. If price is reaching that level, your thesis IS being proven wrong. Get out.`,
        facts: ["Pre-planned exit", "Based on market structure", "Hard > mental stop", "ATR = volatility-based stop", "Never move stop wider", "Algo removes emotion"]
      },

      {
        id: "risk-reward",
        title: "Risk/Reward Ratio",
        tags: ["risk"],
        chain: ["Entry price set", "Stop-loss distance = risk", "Target distance = reward", "Reward ÷ Risk = ratio", "Only take trades ≥ 2:1"],
        blurb: "Risk/reward tells you how much you could make vs how much you could lose on a trade. If you risk $1 to make $2, you only need to be right 34% of the time to break even.",
        detail: `R:R = (Target Price − Entry Price) ÷ (Entry Price − Stop Price)\n\nExample:\nEntry: $100\nStop: $96 (risk = $4)\nTarget: $108 (reward = $8)\nR:R = 8 ÷ 4 = 2:1\n\n<strong>The math that makes this powerful:</strong>\nAt 2:1 R:R, your break-even win rate is only 33%.\nAt 3:1 R:R, break-even is 25%.\nAt 1:1 R:R, you need to be right 50% just to break even (after fees).\n\n<strong>Why this matters:</strong>\nA trader who is right only 40% of the time can be very profitable — IF they consistently take trades with 2:1 or better R:R. Being right most of the time doesn't matter if your winners are small and your losers are large.\n\n<strong>Expected value:</strong>\nEV = (Win Rate × Avg Win) − (Loss Rate × Avg Loss)\nExample: 40% win rate, wins avg $200, losses avg $100\nEV = (0.4 × $200) − (0.6 × $100) = $80 − $60 = $20 positive per trade\n\n<strong>The trap:</strong>\nHigh win rates feel good. A 70% win rate strategy that risks $3 to make $1 has negative EV and will lose money long-term.`,
        memory: `You don't need to be right most of the time to make money. You need your wins to be bigger than your losses.\n\nThink of a baseball analogy: batting .300 is great — that's failing 70% of the time. But home runs (big wins) more than make up for strikeouts (small losses).\n\nR:R is more important than win rate.`,
        examTip: `Before every trade, calculate the R:R BEFORE entering. If the target is only 1.2× the stop distance, skip the trade. No exceptions. This single discipline — only taking trades with adequate R:R — is what separates profitable traders from losing ones.`,
        facts: ["R:R = reward ÷ risk", "2:1 = 33% break even", "3:1 = 25% break even", "EV = (win% × avg win) − loss side", "High win% ≠ profitable", "Calculate BEFORE entry"]
      },

      {
        id: "drawdown",
        title: "Drawdown",
        tags: ["risk"],
        chain: ["Account at peak value", "Losing streak begins", "Account drops from peak", "% drop = drawdown", "Recovery requires bigger % gain"],
        blurb: "Drawdown is how far your account dropped from its peak. A 20% drawdown needs a 25% gain to recover. A 50% drawdown needs a 100% gain. This asymmetry is why protecting capital is everything.",
        detail: `<strong>The asymmetry of losses:</strong>\n−10% drawdown → need +11% to recover\n−20% drawdown → need +25% to recover\n−30% drawdown → need +43% to recover\n−50% drawdown → need +100% to recover\n−80% drawdown → need +400% to recover\n\nThis is why professional traders treat a 20% drawdown as a serious alarm. At 50%, recovery requires performing miracles.\n\n<strong>Maximum Drawdown (Max DD):</strong>\nThe largest peak-to-trough decline in your account history. When evaluating any strategy, max DD tells you the worst-case pain you'd have experienced.\n\n<strong>Drawdown and psychological impact:</strong>\nThis is especially relevant for anyone with mood regulation challenges. A 30% drawdown doesn't just mean lost money — it creates persistent stress that degrades decision-making, increases impulsivity, and can trigger panic selling or reckless "recovery trading."\n\nAn algorithm doesn't experience this. It keeps executing its rules at drawdown 30% exactly as it does at drawdown 0%. This is not a small advantage — it is a transformative one.\n\n<strong>Drawdown limits in algo trading:</strong>\nSet a maximum drawdown threshold — when hit, the algo stops trading automatically. "If account drops 15% from peak, stop all trading." This is a circuit breaker that protects capital during market regime changes.`,
        memory: `Drawdown = the hole you're in. The deeper the hole, the bigger the ladder you need to climb out.\n\n−50% hole needs a 100% ladder. That's not a recovery — that's starting over.\n\nThe goal isn't to maximize returns. It's to maximize returns while keeping the hole small.`,
        examTip: `When you evaluate a strategy, don't just look at total return. Look at maximum drawdown. A strategy that returns 30% with a 5% max drawdown is FAR better than a strategy returning 40% with a 40% max drawdown. The second one will break you psychologically before you see the gains.`,
        facts: ["Max DD = worst peak-to-trough", "−50% needs +100% recovery", "Asymmetric recovery math", "Algo = no emotional DD response", "Set DD circuit breaker", "DD + emotion = danger"]
      },

      {
        id: "emotional-discipline",
        title: "Emotional Discipline & Why Algos Help",
        tags: ["risk"],
        chain: ["Trade goes against you", "Fear activates", "ADHD/mood amplifies impulse", "You deviate from the plan", "Account damaged", "Algo removes this chain"],
        blurb: "Trading is one of the hardest emotional challenges humans face. Real money, uncertainty, and ego collide. For anyone with ADHD or mood regulation challenges, an algorithm isn't just convenient — it's protective.",
        detail: `<strong>Why trading triggers emotional responses:</strong>\nLosing money activates the same brain regions as physical pain. Winning activates the same regions as cocaine. The average human brain is not built for this environment.\n\n<strong>The specific traps:</strong>\n• Revenge trading: losing a trade, immediately placing a larger trade to "win it back." This is how small losses become account-wrecking losses.\n• Moving stops: as a loss grows, the brain generates hope ("it'll come back") and moves the stop wider. The trade gets worse.\n• Abandoning strategy: a few losses and you start second-guessing the entire plan mid-session.\n• Impulsive entries: seeing a fast-moving stock and jumping in without checking your rules. FOMO.\n• Overconfidence after wins: making bigger bets after a winning streak, right before the inevitable losing streak.\n\n<strong>The ADHD + Bipolar dimension:</strong>\nInattentive ADHD means rule-following under pressure is harder. Bipolar type 2 (hypomanic episodes) can create overconfidence, reduced risk perception, and increased impulsivity at exactly the wrong moments. These are not character flaws — they are neurological realities that require structural solutions, not willpower.\n\n<strong>The algorithmic solution:</strong>\nAn algorithm you coded, tested, and trust will follow the plan when you cannot. You make the rules when you're calm and rational. The algorithm executes them when you're not. The system is your steadiest self, running 24/7.\n\nThis is not "giving up" on trading — it is the most sophisticated approach to it.`,
        memory: `You are not a robot. Your brain has features (pattern recognition, creativity, passion) that help you design great strategies. It also has bugs (fear, FOMO, impulsivity) that destroy execution. The algorithm runs your features, not your bugs.\n\nYou program the strategy when calm. The algorithm trades it when chaos hits.`,
        examTip: `The traders with the highest long-term performance are not the most clever — they are the most consistent. Algorithmic trading is the ultimate consistency tool. One strategy, executed identically 10,000 times, will outperform the same strategy executed inconsistently every time.`,
        facts: ["Revenge trading = danger", "Moving stops = never do it", "FOMO = common loss cause", "Algo = consistent execution", "Build rules when calm", "Hypomanic = reduce position size"]
      },

    ]
  },

  // ── 6. Algorithmic Trading Foundations ───────────────────────────────────
  {
    id: "algo-foundations",
    icon: "🤖",
    title: "Algorithmic Trading Foundations",
    subtitle: "What algos are, how they work, and how to build something real",
    concepts: [

      {
        id: "what-is-algo-trading",
        title: "What Algorithmic Trading Is",
        tags: ["algo"],
        chain: ["Human observes market pattern", "Writes rules in code", "Code checks rules automatically", "When rules met, order placed", "No human needed in the loop"],
        blurb: "Algorithmic trading means using code to define your trading rules, then letting the computer execute them automatically. No discretion, no emotion — just the rules you wrote.",
        detail: `<strong>The core idea:</strong>\nInstead of sitting at a screen watching prices, you write a program that:\n1. Continuously monitors market data\n2. Evaluates whether your trading conditions are met\n3. Automatically places orders when conditions trigger\n4. Manages the position (moves stops, takes profit) according to your rules\n5. Records everything for analysis\n\n<strong>Types of algorithmic trading:</strong>\n• Trend following: buy when price is trending up, sell when it trends down\n• Mean reversion: bet that price will return to its average after moving too far\n• Momentum: trade in the direction of recent strong moves\n• Arbitrage: exploit price differences between markets or instruments\n• Market making: continuously post both bids and asks, profit from spread\n\n<strong>What you need to start:</strong>\n• A brokerage with an API (Alpaca, Interactive Brokers, Binance for crypto)\n• Python (the standard language for trading algos)\n• Historical price data (free from Yahoo Finance, paid from vendors)\n• A backtesting framework (Backtrader, Zipline, or build your own)\n\n<strong>Realistic expectations:</strong>\nA simple strategy with a proven edge (2–5% monthly) is a realistic goal after 6–12 months of learning. Hedge fund returns (30%+/year) require years of development and sophisticated infrastructure.`,
        memory: `An algo is your trading brain, bottled. You teach it your rules when you're thinking clearly. It applies those rules 24/7 without getting tired, emotional, or distracted.\n\nThink of it as hiring the most disciplined version of yourself to execute trades.`,
        examTip: `The most important thing to understand early: the edge comes from the STRATEGY, not the technology. A great strategy coded simply beats a mediocre strategy coded elaborately. Start with the simplest possible implementation of a good idea.`,
        facts: ["Rules → code → auto execution", "No emotion", "API = connection to broker", "Python = standard language", "Data + strategy + execution", "Simple beats complex"]
      },

      {
        id: "backtesting",
        title: "Backtesting",
        tags: ["algo"],
        chain: ["Hypothesis formed", "Historical data loaded", "Strategy rules applied to past data", "Results measured", "Edge confirmed or rejected"],
        blurb: "Backtesting means running your strategy on historical data to see how it would have performed. It's the only way to know if your idea has merit before risking real money.",
        detail: `<strong>The backtesting process:</strong>\n1. Get historical OHLCV data (open/high/low/close/volume)\n2. Apply your strategy rules to each bar of data chronologically\n3. Simulate entries, exits, position sizing\n4. Measure results: total return, win rate, max drawdown, Sharpe ratio\n5. Compare to a benchmark (e.g., buy-and-hold SPY)\n\n<strong>What good backtest results look like:</strong>\n• Sharpe ratio > 1.0 (ideally > 1.5)\n• Maximum drawdown you could tolerate\n• Consistent performance across different time periods\n• Works on out-of-sample data (data not used to build the strategy)\n\n<strong>Critical backtesting mistakes:</strong>\n• Look-ahead bias: accidentally using future data in your rules (e.g., using the day's close to generate a signal you "execute" at the open — the close isn't known at the open)\n• Survivorship bias: only testing on stocks that still exist today. Companies that went bankrupt aren't in the data.\n• Transaction costs: include commissions AND spread cost in every trade\n• Not enough trades: a strategy that takes 5 trades in 10 years has statistically meaningless results\n\n<strong>Walk-forward testing:</strong>\nTrain on one period of data, test on the next period you didn't touch. More realistic than testing on all available data.`,
        memory: `Backtesting = a flight simulator before flying real planes. You can crash a hundred times in the simulator with zero real consequences. Do it until you're confident, THEN use real money.\n\nA strategy that looks amazing on backtest but fails live = overfitting (taught it to memorize the past, not understand the market).`,
        examTip: `The biggest backtest mistake beginners make: optimizing parameters (e.g., tuning the RSI period from 14 to 11 because it improves backtest results) until the numbers look great, then going live and watching it fail. This is overfitting. The strategy learned to predict the past, not the future.`,
        facts: ["Historical data simulation", "OHLCV data needed", "Look-ahead bias = fatal error", "Survivorship bias = inflate results", "Include all costs", "Walk-forward = more realistic"]
      },

      {
        id: "overfitting",
        title: "Overfitting",
        tags: ["algo"],
        chain: ["Strategy parameters optimized", "Backtest results improve", "Too fitted to past data", "Live trading fails", "Overfit = memorized, not learned"],
        blurb: "Overfitting is when your strategy is tuned so precisely to historical data that it stops working on new data. It's the #1 reason backtested strategies fail in live trading.",
        detail: `<strong>The concept:</strong>\nImagine you "study" for an exam by memorizing the exact questions and answers from last year's exam. You'll score 100% on that test. On this year's test, with slightly different questions, you'll fail.\n\nOverfitting = your strategy has "memorized" the past instead of learning the underlying market principle.\n\n<strong>Signs of overfitting:</strong>\n• Backtest performance is suspiciously good (Sharpe > 3, drawdown < 2%)\n• Many parameters in the strategy (10+ rules, all optimized)\n• Strategy works only on specific date ranges\n• Small parameter changes cause large performance swings\n• Paper trading or out-of-sample testing dramatically underperforms backtest\n\n<strong>How to avoid it:</strong>\n• Keep your strategy simple — fewer rules, fewer parameters\n• Use in-sample (training) and out-of-sample (test) data separately\n• Walk-forward optimization: optimize on period 1, test on period 2\n• Larger dataset: more years of data = less risk of overfitting\n• Understand WHY the strategy should work logically — if you can't explain the edge, it might just be data mining\n\n<strong>The 2× rule of thumb:</strong>\nFor every parameter you optimize, you need ~100 independent trades in your backtest to have statistical confidence. A strategy with 5 parameters needs 500+ trades minimum.`,
        memory: `Overfitting = making a suit that fits one specific person perfectly. It looks amazing on them. Put it on anyone else and it looks terrible.\n\nYour strategy should fit the general "shape" of how markets work — not the specific wiggles in the 2018–2023 SPY chart.`,
        examTip: `The fix for overfitting is simplicity and out-of-sample testing. Take your "final" strategy parameters, lock them in, then test on data from a completely different time period you never touched. If performance holds, you have something. If it collapses, it was overfit.`,
        facts: ["Memorized past ≠ learned edge", "Fewer params = less overfit", "Out-of-sample test required", "Sharpe > 3 = suspicious", "100 trades per parameter", "Walk-forward = real test"]
      },

      {
        id: "paper-trading",
        title: "Paper Trading",
        tags: ["algo"],
        chain: ["Strategy backtested", "Deploy to paper account", "Real market data", "Simulated money", "Validate before real capital"],
        blurb: "Paper trading is simulated live trading with real market data but fake money. It's the bridge between backtest and real deployment — and it catches problems your backtest couldn't.",
        detail: `<strong>Why backtesting isn't enough:</strong>\nBacktests simulate a perfect world. Reality has:\n• Partial fills: your limit order might only fill half\n• Slippage: market orders fill at worse prices than expected\n• Data delays: real-time feeds behave differently than historical data\n• API errors: your broker's API has latency, dropouts, edge cases\n• Your own mistakes: bugs in your code that only surface with live data\n\n<strong>Paper trading catches all of this:</strong>\nYou're connected to real market data, executing real orders — except the trades don't use real money. You see exactly how your strategy behaves with all the real-world messiness included.\n\n<strong>How long to paper trade:</strong>\nMinimum 1–3 months. You want to see the strategy perform across different market conditions: trending days, choppy sideways days, high-volatility events.\n\n<strong>What to track during paper trading:</strong>\n• Actual fills vs expected fills\n• Slippage per trade (how much worse than expected)\n• Number of API errors or failed orders\n• Whether your code handles edge cases (market closes, trading halts, zero volume)\n• Real-world Sharpe and drawdown vs backtest\n\n<strong>Alpaca, Interactive Brokers, and Binance all offer paper trading accounts.</strong>`,
        memory: `Paper trading = dress rehearsal before opening night. Every problem you solve in rehearsal is one you don't encounter on opening night with a live audience watching.\n\nSkipping paper trading = going straight from flight simulator to flying a real 747 full of passengers.`,
        examTip: `Paper trading often reveals that your strategy's live performance is 30–50% worse than your backtest. This is normal. It means your backtest assumptions were too optimistic. Better to discover this with fake money than real money.`,
        facts: ["Real data, fake money", "Tests slippage + fills", "Min 1–3 months", "Bridges backtest to live", "API errors surface here", "Expect 30–50% worse than backtest"]
      },

    ]
  },


  // ── 7. Building Strategies ────────────────────────────────────────────────
  {
    id: "building-strategies",
    icon: "⚙️",
    title: "Building Strategies",
    subtitle: "The main archetypes — how different strategies work and why they have edge",
    concepts: [

      {
        id: "trend-following",
        title: "Trend Following",
        tags: ["algo"],
        chain: ["Market trends identified", "Enter in direction of trend", "Hold while trend continues", "Exit when trend breaks", "Catch the big moves"],
        blurb: "The most proven long-term strategy in algorithmic trading. If the market is going up, you're long. If it's going down, you're short. Simple in principle, hard to hold through the pullbacks.",
        detail: `<strong>The core principle:</strong>\nMarkets trend because of fundamental drivers (earnings growth, interest rate changes, economic cycles) that don't resolve instantly. Trends persist.\n\n<strong>Basic trend-following entry rules:</strong>\n• Price above 200 SMA → only take long trades\n• 50 SMA crosses above 200 SMA (golden cross) → enter long\n• Price breaks above a consolidation range on high volume → enter long\n• ATR-based stop: place stop 2× ATR below entry\n\n<strong>Famous trend-following systems:</strong>\n• Turtle Trading (Richard Dennis, 1980s): buy 20-day highs, sell 20-day lows. Simple, historically profitable.\n• Dual Moving Average Crossover: trade the cross of two MAs\n• Breakout systems: enter when price breaks above N-day high\n\n<strong>The hard part:</strong>\nTrend following has low win rates (30–45%) but large winners. You'll have lots of small losses and occasional huge wins. This is psychologically difficult — you feel like you're losing most of the time, even when the system is profitable overall.\n\n<strong>Trend following fails in sideways markets:</strong>\nWhen markets chop sideways, trend systems generate many false signals (whipsaws) — you enter a "breakout," price reverses, you exit with a loss, repeat. This is why combining trend with a volatility filter helps.`,
        memory: `Trend following = surfing. You don't create the wave. You paddle out, wait for the right wave, catch it, and ride until it ends. You'll miss many waves (low win rate). But when you catch a big one, it pays for all the misses.\n\nSurfers don't fight the ocean. Trend followers don't fight the trend.`,
        examTip: `When building a trend-following algo, the hardest rule to follow is: don't exit early. Trend following requires holding through 10–15% drawdowns WITHIN the trend. The algo needs a specific exit rule based on trend change — not on pain tolerance. Automate this or you will exit every winner early.`,
        facts: ["Low win rate (30–45%)", "Big winners = edge", "Fails in sideways market", "200 SMA = long filter", "ATR stop = standard", "Turtle trading = famous example"]
      },

      {
        id: "mean-reversion",
        title: "Mean Reversion",
        tags: ["algo"],
        chain: ["Price moves far from average", "Statistical extreme reached", "Bet on return to mean", "Price reverts", "Profit taken"],
        blurb: "Mean reversion bets that when price moves unusually far from its average, it will snap back. Most profitable in ranging, sideways markets — the opposite condition from trend following.",
        detail: `<strong>The principle:</strong>\nPrices don't move in straight lines forever. After large moves, they often return to their average. Mean reversion strategies exploit this by entering counter-trend when price is statistically "stretched."\n\n<strong>Simple mean reversion setup:</strong>\n• Calculate the 20-day SMA and 2-standard-deviation Bollinger Bands\n• When price touches the lower band AND RSI < 30 → buy (expecting reversion up)\n• Exit when price returns to the middle band (20 SMA)\n• Hard stop below the lower band\n\n<strong>RSI(2) strategy — a famous example:</strong>\nLarry Connors' RSI(2) strategy: buy when 2-period RSI drops below 10 (extreme oversold). Sell when RSI rises above 90. Historically strong on large-cap US stocks.\n\n<strong>Best markets for mean reversion:</strong>\n• Large-cap, liquid stocks in range-bound conditions\n• Stock indices (SPY, QQQ) — frequently revert to moving averages\n• Pairs trading (related assets diverging and reconverging)\n\n<strong>Risk — the gap problem:</strong>\nMean reversion is dangerous around earnings and news events. A stock at RSI 15 can be there because it's about to go to zero. You need a filter: avoid entries near earnings dates, avoid stocks in fundamental downtrends.`,
        memory: `Mean reversion = rubber band. Stretch it far enough and it wants to snap back. But if you stretch a rubber band past its breaking point, it doesn't come back — it snaps. That's the risk: sometimes "oversold" means "broken."\n\nAlways ask: is this oversold because of a temporary overreaction, or is the business actually falling apart?`,
        examTip: `Combining mean reversion with a trend filter reduces risk significantly: only take "oversold" buy signals when the broader trend is still up. This filters out the "falling knives" — stocks dropping hard because fundamentals are bad, not because of temporary overselling.`,
        facts: ["Bets on return to average", "RSI < 30 = classic signal", "Works in sideways markets", "Fails in strong trends", "Earnings = dangerous", "Bollinger bands = common tool"]
      },

      {
        id: "momentum",
        title: "Momentum Strategies",
        tags: ["algo"],
        chain: ["Asset has strong recent performance", "Momentum persists short-term", "Enter in direction of strength", "Exit when momentum fades", "High win rate but size matters"],
        blurb: "Momentum strategies buy what's been going up and short what's been going down — based on the finding that assets with recent strong performance tend to continue short-term.",
        detail: `<strong>The momentum anomaly:</strong>\nOne of the most documented findings in financial research: stocks that outperformed over the last 3–12 months tend to continue outperforming for the next 1–3 months. This is called the "momentum premium."\n\n<strong>Cross-sectional momentum:</strong>\nRank all stocks by 12-month return. Buy the top 10% (winners). Short the bottom 10% (losers). Hold for 1 month. Rebalance. This is the classic institutional momentum strategy.\n\n<strong>Time-series momentum (trend):</strong>\nIf an asset's return over the last 12 months is positive → long. If negative → short. Applied to a single asset.\n\n<strong>Short-term momentum (for daily algo trading):</strong>\n• Buy the biggest gap-up stocks at open\n• Buy assets that break out of consolidation on volume spike\n• Enter after a strong first 30-minute bar\n\n<strong>Momentum crashes:</strong>\nMomentum strategies can suffer severe drawdowns during market reversals. When the market crashes and then recovers, the "winners" (often expensive growth stocks) become the biggest losers. This is the momentum crash risk.`,
        memory: `Momentum = going to the hottest restaurant in town. It's packed because it's good. That's momentum. You join the crowd.\n\nBut trends eventually end. The hottest restaurant gets a bad health inspector review — momentum crashes. Knowing when to leave is everything.`,
        examTip: `For individual retail algo traders: short-term momentum (days, not months) is more accessible than long-term cross-sectional momentum. A breakout strategy that catches the first 2–5 days of a strong move, then exits, is a practical momentum implementation.`,
        facts: ["Winners continue short-term", "12-month lookback = classic", "Cross-sectional = relative rank", "Time-series = single asset", "Momentum crash risk", "High volume = confirms breakout"]
      },

      {
        id: "pairs-trading",
        title: "Pairs Trading",
        tags: ["algo"],
        chain: ["Two correlated assets found", "Relationship measured (cointegration)", "One diverges from relationship", "Long the laggard, short the leader", "Wait for convergence"],
        blurb: "Pairs trading exploits the relationship between two correlated assets. When they diverge from their historical relationship, you bet they'll converge — long one, short the other simultaneously.",
        detail: `<strong>Classic example:</strong>\nCoca-Cola (KO) and PepsiCo (PEP) are highly correlated — both are beverage companies affected by similar macro factors. If KO temporarily diverges (KO rises, PEP doesn't), you short KO and buy PEP, expecting convergence.\n\n<strong>Cointegration:</strong>\nTwo assets are "cointegrated" if their price ratio (or spread) tends to stay within a range over time. This is stronger than correlation — it means the relationship is statistically stable.\n\n<strong>The spread:</strong>\nSpread = Price of Asset A − (β × Price of Asset B)\nβ = the hedge ratio (how much of B you need to hold vs A)\nWhen spread is unusually high → short A, long B\nWhen spread is unusually low → long A, short B\n\n<strong>Classic pairs:</strong>\n• KO vs PEP (consumer beverages)\n• GLD vs SLV (gold vs silver)\n• SPY vs QQQ (broad market vs tech)\n• XOM vs CVX (oil companies)\n\n<strong>Market neutral:</strong>\nBecause you're simultaneously long and short, pairs trading is largely market-neutral — market crashes affect both legs similarly, so the strategy can profit in any market condition.\n\n<strong>Risk:</strong>\nPairs can "break" — relationships that held for 10 years stop working because of a fundamental change (one company gets acquired, new regulation, etc.).`,
        memory: `Pairs trading = watching two twins. They usually walk at the same speed. One sprints ahead → bet that they'll walk together again. You're not betting on where they're going, just that they'll stay together.\n\nMarket neutral = you don't care if the market goes up or down. You care only about the relationship between the two.`,
        examTip: `Cointegration (tested with ADF test in Python/statsmodels) is more reliable than correlation for pairs trading. Two assets can be highly correlated in returns but not cointegrated in price levels. You want cointegration.`,
        facts: ["Long + short simultaneously", "Market neutral", "Cointegration = stable relationship", "Spread = divergence measure", "Beta = hedge ratio", "Risk: relationship breaks"]
      },

    ]
  },

  // ── 8. Quant & Math Basics ────────────────────────────────────────────────
  {
    id: "quant-math",
    icon: "📐",
    title: "Quant & Math Basics",
    subtitle: "The statistics and probability you actually need — explained for humans",
    concepts: [

      {
        id: "statistics-for-traders",
        title: "Statistics for Traders",
        tags: ["quant"],
        chain: ["Price data collected", "Mean calculated", "Variance around mean", "Standard deviation tells spread", "Z-score shows how extreme a move is"],
        blurb: "You don't need a stats degree. You need 5 concepts: mean, standard deviation, z-score, correlation, and distribution. These are the building blocks of every quant strategy.",
        detail: `<strong>Mean (average):</strong>\nThe average of a set of values. For daily returns: sum all returns, divide by number of days.\n\n<strong>Standard Deviation (σ):</strong>\nHow spread out the values are from the mean. Low σ = values clustered close to mean (low volatility). High σ = values spread wide (high volatility).\n\n<strong>Z-Score:</strong>\nHow many standard deviations a value is from the mean.\nZ = (Value − Mean) ÷ Standard Deviation\nZ of 2 = the value is 2 standard deviations above average = statistically unusual (happens ~5% of the time in a normal distribution).\n\nUsed in mean reversion: when price is 2σ above its 20-day mean, it's unusually stretched.\n\n<strong>Variance:</strong>\nσ² (standard deviation squared). Used in portfolio math more than in daily trading.\n\n<strong>Percentile:</strong>\nWhere a value ranks in a distribution. RSI of 80 means the current momentum reading is in the top 20% of historical readings.\n\n<strong>Practical Python:</strong>\n• numpy.mean() → average\n• numpy.std() → standard deviation\n• (value - mean) / std → z-score\n• These three lines appear in almost every quant strategy.`,
        memory: `Standard deviation = the average distance from the average.\n\nZ-score = "how weird is this?" Z=0 = totally normal. Z=2 = unusual (top/bottom 5%). Z=3 = very rare (top/bottom 0.3%). In trading: Z > 2 on a price move often triggers a mean reversion entry.\n\nMost market moves are small. Big moves are rare. That's the distribution.`,
        examTip: `The most useful stat for algo traders: z-score. When you see a price move and want to know if it's "big enough to trade," calculate its z-score against recent history. If |z| > 2, it's a statistically meaningful deviation. Below 1, it's just noise.`,
        facts: ["Mean = average", "σ = standard deviation", "Z-score = deviations from mean", "Z=2 = unusual (5%)", "Variance = σ²", "numpy.std() in Python"]
      },

      {
        id: "probability-and-ev",
        title: "Probability & Expected Value",
        tags: ["quant"],
        chain: ["Every trade is a bet", "Assign probability to outcomes", "Multiply by magnitude", "Sum = expected value", "Positive EV = edge exists"],
        blurb: "Expected value (EV) is the average outcome if you ran the same trade thousands of times. Positive EV means you make money over enough trades. This is the mathematical definition of having an edge.",
        detail: `<strong>Expected Value formula:</strong>\nEV = (Probability of Win × Avg Win Size) − (Probability of Loss × Avg Loss Size)\n\nExample:\n• Win rate: 45%\n• Average win: $200\n• Average loss: $100\n• EV = (0.45 × $200) − (0.55 × $100) = $90 − $55 = +$35 per trade\n\nPositive EV = run this trade 1000 times and you make money.\n\n<strong>Why beginners lose:</strong>\nNegative EV strategy. Usually: they take big risks on uncertain setups (low win probability) and cut winners early (small win size). Result: EV is negative even if their analysis is sometimes right.\n\n<strong>Law of Large Numbers:</strong>\nThe more trades you take, the more your actual results converge to your expected value. 10 trades = random noise. 1000 trades = your EV reveals itself.\n\nThis is why backtests need lots of trades. And why you should never judge a strategy on 20 trades.\n\n<strong>The gambler's fallacy:</strong>\nAfter 5 losing trades, you are NOT "due" for a win. Each trade is independent. The strategy's probability resets on every trade. This is the gambler's fallacy and it causes revenge trading.`,
        memory: `EV = the casino's business model, but in your favor. The casino wins every time (positive EV) even though individual bets are random. You're building a casino, not gambling in one.\n\nAfter 5 losses: you are NOT due for a win. Each trade is a fresh coin flip. The streak doesn't matter. The EV does.`,
        examTip: `Before going live with any strategy, calculate its historical EV from the backtest. If EV is negative or near zero, the strategy has no edge. If positive, estimate how many trades per month it generates — that tells you your expected monthly income from the strategy.`,
        facts: ["EV = (win%×win) − (loss%×loss)", "Positive EV = edge", "LLN = results converge", "Min 100+ trades to judge", "Gambler's fallacy = wrong", "Each trade is independent"]
      },

      {
        id: "sharpe-ratio",
        title: "Sharpe Ratio",
        tags: ["quant"],
        chain: ["Strategy returns measured", "Risk-free rate subtracted", "Divided by return volatility", "= Sharpe ratio", "Higher = better risk-adjusted return"],
        blurb: "The Sharpe ratio measures return per unit of risk. It's the single most important number for comparing strategies — a 20% return with low volatility beats a 30% return with wild swings.",
        detail: `Sharpe = (Strategy Return − Risk-Free Rate) ÷ Standard Deviation of Returns\n\nThe risk-free rate is roughly the current T-bill/savings rate (call it 5% in 2024, or simplify to 0).\n\n<strong>Interpreting Sharpe:</strong>\n• Below 0.5: poor. High risk for the return.\n• 0.5–1.0: acceptable. Markets typically produce ~0.5–0.7.\n• 1.0–2.0: good. Most professional strategies aim here.\n• Above 2.0: very good. Rare to sustain.\n• Above 3.0: suspicious. Often overfitting.\n\n<strong>Why it matters more than raw return:</strong>\nStrategy A: 40% annual return, but swings wildly (σ = 40%) → Sharpe = 1.0\nStrategy B: 20% annual return, very smooth (σ = 10%) → Sharpe = 2.0\nStrategy B is BETTER — same directional return per unit of risk, but you can sleep at night. You could also leverage Strategy B 2× for 40% return with the same volatility as Strategy A.\n\n<strong>Sortino Ratio:</strong>\nLike Sharpe but only penalizes DOWNSIDE volatility. More useful — upside volatility is fine. Sortino > 1.5 is a good target.\n\n<strong>Calmar Ratio:</strong>\nAnnual return ÷ Maximum Drawdown. High Calmar = good return for the worst-case drawdown experienced.`,
        memory: `Sharpe = return per unit of pain. How much did you earn for every unit of stomach-churning volatility?\n\nA bumpy road that gets you there fast is worse than a smooth road at the same average speed. Sharpe measures the smoothness of the journey, not just the destination.\n\nSharpe > 1 = you're earning more than you're suffering.`,
        examTip: `When presenting a strategy to anyone (including yourself in 6 months), lead with Sharpe and max drawdown, not just return. "I returned 50% last year" means nothing without knowing if you had a 40% drawdown to get there.`,
        facts: ["Return ÷ volatility of returns", "Sharpe > 1 = good", "Sharpe > 2 = great", "Sharpe > 3 = suspicious", "Sortino = downside only", "Calmar = return ÷ max DD"]
      },

      {
        id: "correlation",
        title: "Correlation",
        tags: ["quant"],
        chain: ["Two assets move together", "Measure relationship strength", "+1 = identical", "0 = no relationship", "-1 = exact opposites"],
        blurb: "Correlation measures how two assets move in relation to each other. It's essential for building portfolios of multiple strategies — you want strategies that don't all fail at the same time.",
        detail: `Correlation coefficient (r) ranges from −1 to +1:\n• r = +1: perfectly correlated. Move exactly together. Holding both = no diversification.\n• r = 0: no correlation. Move independently.\n• r = −1: perfectly inverse. One zigs when the other zags.\n\n<strong>In portfolio building:</strong>\nIf all your strategies are highly correlated (all trend-following, all in equities), they'll all draw down simultaneously during market crashes. Adding an uncorrelated strategy (e.g., a mean reversion strategy on a different asset class) smooths overall equity curve.\n\n<strong>Common correlations to know:</strong>\n• Gold vs USD: typically negative (gold rises when dollar falls)\n• Stocks vs Bonds: often negative in normal markets (risk-on/risk-off)\n• Crypto pairs: often highly correlated to Bitcoin\n• Tech stocks: highly correlated to QQQ/NASDAQ\n\n<strong>Correlation vs Causation:</strong>\nHigh correlation doesn't mean one causes the other. Ice cream sales and drownings are correlated (both rise in summer). Correlation is a statistical relationship, not a causal one.\n\n<strong>Correlation in Python:</strong>\npandas: df.corr() → full correlation matrix of all columns\nnp.corrcoef(a, b) → correlation between two arrays`,
        memory: `Correlation = do they move together?\n+1 = twins walking in lockstep. 0 = strangers walking randomly. -1 = one always goes left when the other goes right.\n\nFor a portfolio: you want a mix of 0s and -1s. Not a team of +1 clones — when one falls, they all fall.`,
        examTip: `For pairs trading (previous section): you want correlation AND cointegration. Correlation alone isn't enough — two assets can be correlated but diverge permanently. Cointegration means the spread between them has a "mean" it reverts to.`,
        facts: ["Range: −1 to +1", "+1 = same direction", "0 = independent", "−1 = opposite direction", "Low corr = diversification", "pandas df.corr()"]
      },

    ]
  },


  // ── 9. Tools & Tech ───────────────────────────────────────────────────────
  {
    id: "tools-and-tech",
    icon: "🛠️",
    title: "Tools & Tech",
    subtitle: "Python, APIs, data sources, and the frameworks that actually run algos",
    concepts: [

      {
        id: "python-for-trading",
        title: "Python for Trading",
        tags: ["tech"],
        chain: ["Install Python + libraries", "Load market data", "Write strategy logic", "Backtest results", "Connect to broker API", "Go live"],
        blurb: "Python is the standard language for algorithmic trading. It has the best libraries, the largest community, and the most broker API support. You don't need to be an expert programmer — you need to know enough.",
        detail: `<strong>Core libraries you will use:</strong>\n• pandas: data manipulation. Everything in trading is time-series data — pandas handles it perfectly.\n• numpy: fast math operations on arrays. Mean, std, z-score calculations.\n• matplotlib / plotly: charting. Visualizing your backtests and equity curves.\n• requests / aiohttp: making API calls to brokers and data providers.\n• ta / ta-lib: technical indicators (RSI, MACD, Bollinger Bands pre-built).\n• backtrader / zipline / vectorbt: backtesting frameworks.\n\n<strong>The minimal viable setup:</strong>\n1. Install Python 3.10+\n2. pip install pandas numpy matplotlib ta alpaca-trade-api\n3. Get historical data from Yahoo Finance: yfinance library\n4. Write your first strategy in 50 lines\n5. Connect to Alpaca paper account\n\n<strong>Essential Python for trading (what to learn first):</strong>\n• Lists, dictionaries, loops (basic Python)\n• pandas DataFrames: how to load CSVs, filter rows, calculate columns\n• Functions: how to write reusable logic\n• If/elif/else: your strategy rules are all conditionals\n• datetime: working with dates and market hours\n\n<strong>You do NOT need:</strong>\nDeep OOP, machine learning, web development, or advanced algorithms. Start simple.`,
        memory: `Python for trading stack:\npandas = your spreadsheet\nnumpy = your calculator\nmatplotlib = your charts\nrequests = your phone call to the broker\nta-lib = your indicator toolbox\n\nMaster these five and you can build any strategy.`,
        examTip: `The single most important pandas operation for trading: df['close'].pct_change() gives you daily return percentages. From there: .mean() = average return, .std() = volatility, .cumsum() = equity curve. Learn those three and you can analyze any strategy.`,
        facts: ["pandas = data tables", "numpy = math arrays", "yfinance = free data", "alpaca = US stocks API", "ta-lib = indicators", "pip install everything"]
      },

      {
        id: "trading-apis",
        title: "Trading APIs",
        tags: ["tech"],
        chain: ["Strategy generates signal", "API call to broker", "Order placed", "Fill confirmed", "Position tracked"],
        blurb: "A trading API is the connection between your Python code and the exchange. You tell it to buy 10 shares of AAPL — it executes the order in real markets.",
        detail: `<strong>Popular trading APIs for beginners:</strong>\n\n<strong>Alpaca (US stocks):</strong>\nFree, beginner-friendly, commission-free. Paper AND live accounts. REST API and WebSocket. Best starting point for US equity algo trading.\npip install alpaca-trade-api\n\n<strong>Interactive Brokers (IBKR):</strong>\nUsed by professionals. Supports every asset class globally. Complex API (TWS API or ib_insync Python library). Requires real money to open an account.\n\n<strong>Binance API (crypto):</strong>\nFree, very well documented. python-binance library. Supports spot and futures. Paper trading via testnet. Best for crypto algo trading.\n\n<strong>Yahoo Finance (data only, no trading):</strong>\nyfinance Python library — free historical OHLCV data for stocks. Not real-time. Perfect for backtesting.\n\n<strong>Key API concepts:</strong>\n• Authentication: API key + secret (never commit these to GitHub)\n• REST API: request/response. You ask, it answers. Simple, sufficient for most strategies.\n• WebSocket: persistent connection, streaming real-time price data. Needed for high-frequency or intraday strategies.\n• Rate limits: brokers limit how many requests per second. Exceed it and you get blocked.\n\n<strong>Environment variables for secrets:</strong>\nStore API keys in .env file, load with python-dotenv. Never hardcode keys in your script.`,
        memory: `API = the phone line to your broker. REST API = you call, they answer, you hang up (one request at a time). WebSocket = a phone call that stays open, with prices streaming live.\n\nAPI key = your username + password combined. Treat it like your bank PIN — never share it, never put it in code you push to GitHub.`,
        examTip: `Start with Alpaca for US stocks or Binance testnet for crypto. Both have excellent documentation and active communities. Alpaca's paper trading is live market data with fake money — the best learning environment available for free.`,
        facts: ["Alpaca = US stocks, free", "IBKR = professional, global", "Binance = crypto", "yfinance = free backtest data", "REST = request/response", "WebSocket = streaming"]
      },

      {
        id: "backtesting-frameworks",
        title: "Backtesting Frameworks",
        tags: ["tech"],
        chain: ["Historical data loaded", "Framework simulates trading", "Strategy rules applied", "Results calculated", "Metrics output"],
        blurb: "A backtesting framework handles the mechanics of simulating trades on historical data — so you don't have to reinvent the wheel. Three main options depending on your style.",
        detail: `<strong>Backtrader:</strong>\nThe most widely used Python backtesting framework. Event-driven (simulates a real market, one bar at a time). Supports multiple data feeds, multiple strategies, live trading via brokers. Steeper learning curve but very powerful.\n\nBest for: custom strategies, beginners who want to learn properly.\n\n<strong>vectorbt:</strong>\nVector-based backtesting — applies strategy rules to entire arrays at once. Extremely fast. Can test thousands of parameter combinations in seconds. Great for optimization.\n\nBest for: rapid iteration, optimization, strategy screening.\n\n<strong>Zipline (Zipline Reloaded):</strong>\nOriginally built by Quantopian (now defunct). Calendar-aware, handles splits and dividends. Good for long-term equity strategies.\n\n<strong>Build your own (simplest approach):</strong>\nimport pandas as pd\ndf = yf.download("AAPL", start="2018-01-01")\ndf["signal"] = (df["Close"] > df["Close"].rolling(20).mean()).astype(int)\ndf["returns"] = df["Close"].pct_change()\ndf["strategy"] = df["signal"].shift(1) * df["returns"]\ndf["strategy"].cumsum().plot()\nThis is a complete backtest in 5 lines. Start here, understand it fully, then graduate to a framework.`,
        memory: `Backtesting framework = a time machine for your strategy. You can go back to 2010, run your strategy from day 1, and see exactly what would have happened.\n\nSimple vectorized backtest = fast but approximate. Backtrader event-driven = slower but realistic (handles fills, slippage, multiple orders).`,
        examTip: `Before using any framework: write a manual backtest on a spreadsheet first. Calculate signals, entries, exits, P&L by hand for 20–30 trades. This forces you to understand exactly what your strategy does — then code it. Copying someone else's framework code without this understanding = bugs you won't catch.`,
        facts: ["Backtrader = event-driven", "vectorbt = fast, vectorized", "Zipline = calendar-aware", "5-line backtest = start here", "yfinance = data source", "Always include costs"]
      },

      {
        id: "ta-lib-indicators",
        title: "TA-Lib & Technical Indicators in Python",
        tags: ["tech"],
        chain: ["Raw OHLCV data in DataFrame", "Import ta library", "Call indicator function", "New column added", "Use in strategy logic"],
        blurb: "TA-Lib is the standard library for computing technical indicators in Python. It has 150+ pre-built indicators — RSI, MACD, Bollinger Bands, ATR, all in one line of code.",
        detail: `<strong>Two main options:</strong>\n\n<strong>ta-lib (C-based, fastest):</strong>\n• Requires C library installation (slightly complex on Windows)\n• pip install TA-Lib after installing the C library\n• Usage: talib.RSI(df['close'].values, timeperiod=14)\n\n<strong>ta (pure Python, easier to install):</strong>\n• pip install ta\n• Usage: ta.momentum.RSIIndicator(df['close'], window=14).rsi()\n• Slightly slower but zero installation headaches\n\n<strong>Key indicators and their Python calls:</strong>\n\nRSI:\nta.momentum.RSIIndicator(df['close'], window=14).rsi()\n\nMACD:\nMACD = ta.trend.MACD(df['close'])\ndf['macd'] = MACD.macd()\ndf['signal'] = MACD.macd_signal()\n\nBollinger Bands:\nBB = ta.volatility.BollingerBands(df['close'], window=20, window_dev=2)\ndf['bb_upper'] = BB.bollinger_hband()\ndf['bb_lower'] = BB.bollinger_lband()\n\nATR:\ndf['atr'] = ta.volatility.AverageTrueRange(df['high'], df['low'], df['close'], window=14).average_true_range()\n\n<strong>ATR — the most useful for position sizing:</strong>\nATR measures average daily range. Use it to set stop distances and position sizes that adapt to current volatility.`,
        memory: `ta library = the calculator that already has all the trading math built in. You don't solve RSI by hand — you call ta.momentum.RSIIndicator() and get the answer.\n\nATR = how much this asset moves on an average day. Stop = 1.5 × ATR below entry. Position size = (risk $) ÷ (1.5 × ATR).`,
        examTip: `ATR-based position sizing is the professional standard. It automatically makes your positions smaller in high-volatility markets and larger in calm markets — keeping your dollar risk per trade roughly constant regardless of what the asset is doing.`,
        facts: ["ta = pip install ta", "RSI in one line", "MACD = 3 components", "ATR = daily range avg", "BB = 3 lines", "ATR → stop distance"]
      },

    ]
  },

  // ── 10. Quick Reference ───────────────────────────────────────────────────
  {
    id: "quick-reference",
    icon: "📌",
    title: "Quick Reference",
    subtitle: "Cheat sheets, formulas, glossary — the things you'll look up over and over",
    concepts: [

      {
        id: "order-types-cheatsheet",
        title: "Order Types Cheat Sheet",
        tags: ["ref"],
        chain: ["Know what you want", "Pick the right order type", "Place it correctly", "Confirm the fill", "Manage the position"],
        blurb: "All 7 order types in one place. The ones you'll use daily and when to use them.",
        detail: `<strong>Market Order:</strong>\nUse: when you MUST get filled immediately and price doesn't matter much.\nRisk: slippage in fast markets.\n\n<strong>Limit Order:</strong>\nUse: when you want a specific entry price. Standard for algo entries.\nRisk: might not fill if price doesn't reach your level.\n\n<strong>Stop-Loss (Stop Market):</strong>\nUse: to exit a losing position automatically.\nRisk: slippage in fast markets (gap through your stop).\n\n<strong>Stop-Limit:</strong>\nUse: stop protection with price control.\nRisk: may NOT fill during fast moves (gap through the stop-limit).\n\n<strong>Trailing Stop:</strong>\nUse: lock in profits as price moves in your favor. Good for trend-following exits.\nExample: 5% trailing stop follows price upward, exits if price drops 5% from its peak.\n\n<strong>Take-Profit (Limit):</strong>\nUse: exit at your target price automatically.\nPlace this when you enter the trade.\n\n<strong>OCO (One-Cancels-Other):</strong>\nUse: place take-profit AND stop-loss together. When one fills, the other cancels.\nThis is the professional way to manage every trade — set it and forget it.\n\n<strong>Best practice:</strong>\nFor every trade: enter with a limit order, set OCO for take-profit + stop-loss. Remove yourself from the decision at exit.`,
        memory: `The three orders you need for every trade:\n1. Entry: Limit order (defined price)\n2. Stop-loss: Stop order (protection)\n3. Take-profit: Limit order (target)\n\nSet all three when you enter. Walk away. Let the math work.`,
        examTip: `In algo code, OCO orders are often implemented as two separate orders: a stop-loss and a take-profit limit, with logic to cancel the other when one fills. Alpaca and IBKR both support native OCO order brackets.`,
        facts: ["Market = instant any price", "Limit = specific price", "Stop = trigger then market", "Trailing = follows price", "OCO = both at once", "Bracket = entry + TP + SL"]
      },

      {
        id: "key-indicators-cheatsheet",
        title: "Key Indicators at a Glance",
        tags: ["ref"],
        chain: ["Choose what to measure", "Pick the right indicator", "Read its signal", "Combine for confluence", "Execute only on alignment"],
        blurb: "The 8 most important indicators, what they measure, their default settings, and how to read them — in one card.",
        detail: `<strong>Trend Indicators:</strong>\n\n• SMA (Simple Moving Average)\n  - Measures: average price over N periods\n  - Default: 20, 50, 200\n  - Signal: price above = bullish, below = bearish. Crossovers = trend change.\n\n• EMA (Exponential Moving Average)\n  - Measures: same as SMA but weights recent prices more\n  - Default: 9, 21, 50\n  - Signal: reacts faster to price changes. Use for entries, SMA for trend.\n\n<strong>Momentum Indicators:</strong>\n\n• RSI (Relative Strength Index)\n  - Measures: speed of recent price moves\n  - Default: period=14, levels 30/70\n  - Signal: <30 oversold, >70 overbought, divergence = trend warning\n\n• MACD\n  - Measures: relationship between 12 and 26 EMA\n  - Default: 12/26/9\n  - Signal: MACD line crosses signal line. Histogram size = momentum strength.\n\n<strong>Volatility Indicators:</strong>\n\n• Bollinger Bands\n  - Measures: price volatility relative to average\n  - Default: 20 SMA ± 2σ\n  - Signal: price at band edges = stretch. Band squeeze = breakout loading.\n\n• ATR (Average True Range)\n  - Measures: average daily price range\n  - Default: period=14\n  - Signal: not a buy/sell signal — used for stop distances and position sizing.\n\n<strong>Volume Indicators:</strong>\n\n• OBV (On-Balance Volume)\n  - Measures: cumulative volume direction\n  - Signal: rising = buying pressure. Diverge from price = warning.\n\n• Volume bars\n  - Signal: high volume + price move = confirmation. Low volume = weak move.`,
        memory: `Trend: MAs tell you direction.\nMomentum: RSI + MACD tell you strength.\nVolatility: Bollinger + ATR tell you range.\nVolume: OBV + volume bars tell you conviction.\n\nOne from each category = full picture.`,
        examTip: `You don't need all 8. Pick one trend indicator, one momentum indicator, and use volume for confirmation. Three inputs with a clear rule beats eight inputs with fuzzy logic every time.`,
        facts: ["SMA/EMA = trend", "RSI = momentum 0-100", "MACD = 12/26/9", "BB = 20 SMA ± 2σ", "ATR = daily range", "OBV = volume direction"]
      },

      {
        id: "common-formulas",
        title: "Key Formulas",
        tags: ["ref"],
        chain: ["Know the formula", "Plug in your numbers", "Interpret the result", "Apply to your trade"],
        blurb: "The formulas you'll use repeatedly — position sizing, risk/reward, Sharpe, and the returns math — all in one place.",
        detail: `<strong>Position Sizing:</strong>\nShares = (Account Size × Risk %) ÷ (Entry − Stop)\nExample: $10,000 × 1% ÷ ($100 − $97) = $100 ÷ $3 = 33 shares\n\n<strong>Risk/Reward Ratio:</strong>\nR:R = (Target − Entry) ÷ (Entry − Stop)\nExample: ($108 − $100) ÷ ($100 − $96) = 8 ÷ 4 = 2:1\n\n<strong>Expected Value:</strong>\nEV = (Win Rate × Avg Win) − (Loss Rate × Avg Loss)\nExample: 45% × $200 − 55% × $100 = $90 − $55 = +$35 per trade\n\n<strong>Break-Even Win Rate:</strong>\nBE% = Avg Loss ÷ (Avg Win + Avg Loss)\nExample: $100 ÷ ($200 + $100) = 33.3%\n\n<strong>Sharpe Ratio:</strong>\nSharpe = (Mean Return − Risk-Free Rate) ÷ StdDev of Returns\n(Annualize: multiply daily return mean by 252, daily StdDev by √252)\n\n<strong>Drawdown:</strong>\nDD% = (Peak − Trough) ÷ Peak × 100\nRecovery needed = 1 ÷ (1 − DD%) − 1\nExample: 50% DD → need 100% gain to recover\n\n<strong>Z-Score:</strong>\nZ = (Value − Mean) ÷ StdDev\n\n<strong>ATR-based Stop Distance:</strong>\nStop = Entry − (ATR × multiplier)\nCommon: 1.5× ATR or 2× ATR below entry`,
        memory: `Position size formula = the most important formula in trading.\nShares = Risk Dollars ÷ Stop Distance\n\nEverything else you can look up. This one lives in your head.`,
        examTip: `Print this card. Stick it next to your monitor. Every time you consider a trade: calculate position size first, R:R second. If R:R < 2:1, skip the trade. No exceptions.`,
        facts: ["Position = risk$ ÷ stop$", "R:R = reward ÷ risk", "EV = (win×W) − (loss×L)", "Sharpe = mean ÷ σ", "Z = (x−μ) ÷ σ", "DD recovery is asymmetric"]
      },

      {
        id: "trading-glossary",
        title: "Glossary",
        tags: ["ref"],
        chain: ["Encounter unknown term", "Look it up here", "Understand the context", "Move on"],
        blurb: "The 30 terms that come up constantly — from order books to Greeks to quant jargon. Quick definitions, no fluff.",
        detail: `<strong>Market Structure:</strong>\n• Bull market: prolonged uptrend, usually 20%+ from lows\n• Bear market: prolonged downtrend, usually 20%+ from highs\n• Correction: 10–20% pullback within an overall uptrend\n• Consolidation: sideways price movement after a trend\n• Gap: price opens significantly above or below prior close\n\n<strong>Order & Execution:</strong>\n• Fill: an order that has been executed\n• Slippage: difference between expected and actual fill price\n• Liquidity: how easily an asset can be bought/sold without moving price\n• Market depth: the number of pending orders at different price levels\n• Dark pool: private exchanges where institutions trade large blocks anonymously\n\n<strong>Risk & Portfolio:</strong>\n• Leverage: borrowing to increase position size (amplifies gains AND losses)\n• Margin: collateral required to hold a leveraged position\n• Margin call: broker demands more collateral because position lost too much\n• Hedge: a position that offsets risk in another position\n• Beta: how much an asset moves relative to the market (Beta=1 = moves with market)\n• Alpha: return above what beta (market exposure) would predict = your true edge\n\n<strong>Algo / Quant:</strong>\n• Regime: a market condition (trending, ranging, volatile) — algos behave differently in different regimes\n• Backtesting: testing a strategy on historical data\n• Out-of-sample: data not used in strategy development — the true test\n• Overfitting: strategy tuned to past data, fails on new data\n• Walk-forward: train/test sequentially through time\n• Universe: the set of instruments your strategy considers trading`,
        memory: `Alpha = your REAL edge above just owning index funds.\nBeta = how much you're just riding the market up and down.\n\nA strategy with high alpha and low beta is the holy grail — profits that are real, not just riding market momentum.`,
        examTip: `When someone describes a "high alpha strategy," ask: what's the Sharpe? Alpha can be high but so can risk. Alpha adjusted for risk (information ratio) is what actually matters.`,
        facts: ["Bull = 20%+ up", "Bear = 20%+ down", "Slippage = price difference", "Alpha = edge above market", "Beta = market correlation", "Regime = market condition"]
      },

    ]
  },

];

// Flat list for search + progress tracking
const ALL_CONCEPTS = SECTIONS.flatMap(s => s.concepts);
