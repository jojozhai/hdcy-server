/**
 * 
 */
package com.ymt.mirage.car.dto;

import com.ymt.mirage.car.domain.Lottery;
import com.ymt.mirage.car.domain.Voting;

/**
 * 用户信息的完善程度
 * @author zhailiang
 * @since 2016年6月21日
 */
public enum InfoCompleteType {
	
	/**
	 * 未完善
	 */
	NONE {
		@Override
		public int getVoteLimit(Voting voting) {
			return voting.getVoteLimit1();
		}
		@Override
		public int getLotteryLimit(Lottery lottery) {
			return 1;
		}
	},
	/**
	 * 完善了必填信息
	 */
	REQUIRED {
		@Override
		public int getVoteLimit(Voting voting) {
			return voting.getVoteLimit2();
		}
		@Override
		public int getLotteryLimit(Lottery lottery) {
			return lottery.getLimit();
		}
	},
	/**
	 * 完善了全部信息
	 */
	FULL {
		@Override
		public int getVoteLimit(Voting voting) {
			return voting.getVoteLimit2();
		}
		@Override
		public int getLotteryLimit(Lottery lottery) {
			return lottery.getLimit();
		}
	};

	public abstract int getVoteLimit(Voting voting);

	public abstract int getLotteryLimit(Lottery lottery);

}
